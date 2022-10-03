/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import UpdateReviewForm from "./UpdateReviewForm";

//특정 질문을 클릭하면 아래에 이에 관한 답변이 나와야 한다.
//특정 질문을 클릭하면 상위컴포넌트에서 상태를 관리해 주어야 한다. commetId중에 현재 클릭된 아이를 저장할 수 있어야 한다.
//클릭이 된 아이는 state에 id값이 저장이 된다.
//다시 렌더링 하는 과정에서 click된 아이는 replies를 화면에 보여주게 한다.
//새로운 아이가 클릭되면 state를 변경해준다.

//댓글아이콘을 누르면 댓글과 함께 답변을 입력할 수 있는 textarea가 나온다.
//isReplying으로 세팅을 해줘야한다.
//배열로 만든다 [clickedId, isReplying]으로 만든다.

function ReviewComment(props) {
  const renderStar = () => <AiFillStar key={Math.random().toString(36).substr(2, 9)} />;
  const renderStars = (num) => [...Array(num)].map((num) => renderStar()); //이부분에서 start를 맵으로 뿌리기 대문에 key값 관련 이슈가 생긴다. 하지만 동작하는 부분에서 전혀 문제가 없기 때문에 고려해봐야한다. 일
  //일단은 랜덤한 키를 주는 것으로 해결.
  return (
    <Container>
      <div className="reviewComment">
        <div className="reviewComment-image-container">
          <img src="/user-icon.png"></img>
        </div>
        <div className="reviewComment-right-part">
          <div className="reviewComment-content">
            <div className="reviewComment-content-top">
              <div className="reviewComment-content-top__left">
                <div className="reviewComment-author">{props.review.reviewName}</div>
                <div className="reviewComment-CreatedAt">{props.review.reviewCreatedAt}</div>
                {props.UserIsLogin && props.userEmail === props.review.reviewEmail ? ( //
                  <button onClick={() => props.setClickedReview([props.review.reviewId, true])}>리뷰 수정하기</button>
                ) : null}
                {props.UserIsLogin && props.userEmail === props.review.reviewEmail ? ( //
                  <button onClick={() => props.deleteReview(props.review.reviewId)}>리뷰 삭제하기</button>
                ) : null}
              </div>
              <div className="reviewComment-content-top__right">
                <div>{renderStars(Number(props.review.reviewStars))}</div>
              </div>
            </div>
            <div className="reviewComment-content_bottom">
              <div className="reviewComment-text">{props.review.reviewContent}</div>
            </div>
          </div>
        </div>
      </div>
      {props.isEditing ? (
        <UpdateReviewForm //
          updateReview={props.updateReview}
          initialText={props.review.reviewContent}
          reviewId={props.review.reviewId}
          setClickedReview={props.setClickedReview}
          initialStars={props.review.reviewStars}
        />
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3px 0;
  width: 100%;

  .reviewComment {
    display: flex;
    width: 100%;
    align-items: center;
    max-width: 836px;
    height: auto;
    border-bottom: 2px solid rgba(124, 124, 124, 0.5);
    box-sizing: border-box;
    padding-bottom: 7px;
  }

  .reviewComment-image-container {
    img {
      border-radius: 50px;
    }
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reviewComment-right-part {
    flex: auto;
    font-size: 16px;
    .reviewComment-content-top {
      display: flex;

      height: 50px;

      .reviewComment-content-top__left {
        display: flex;
        align-items: center;
        flex: auto;

        .reviewComment-author {
          font-weight: bold;
        }
        .reviewComment-CreatedAt {
          margin-left: 10px;
          opacity: 0.7;
        }
        button {
          margin: 0 5px;
          padding: 3px 7px;
          font-size: 14px;
          border: none;
          outline: none;
          border-radius: 5px;
          &:nth-child(3) {
            background-color: rgba(0, 255, 98, 0.87);
          }
          &:nth-child(4) {
            background-color: rgba(255, 93, 93, 0.87);
          }
        }
      }
      .reviewComment-content-top__right {
        display: flex;
        flex: auto;
        justify-content: end;
        align-items: center;
        padding-right: 5px;
        color: yellow;
      }
    }
    .reviewComment-content_bottom {
      .reviewComment-text {
        height: auto;
      }
    }
  }
`;

export default ReviewComment;
