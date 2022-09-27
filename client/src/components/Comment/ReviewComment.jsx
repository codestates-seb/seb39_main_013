/* eslint-disable */
import React from "react";
import styled from "styled-components";

//특정 질문을 클릭하면 아래에 이에 관한 답변이 나와야 한다.
//특정 질문을 클릭하면 상위컴포넌트에서 상태를 관리해 주어야 한다. commetId중에 현재 클릭된 아이를 저장할 수 있어야 한다.
//클릭이 된 아이는 state에 id값이 저장이 된다.
//다시 렌더링 하는 과정에서 click된 아이는 replies를 화면에 보여주게 한다.
//새로운 아이가 클릭되면 state를 변경해준다.

//댓글아이콘을 누르면 댓글과 함께 답변을 입력할 수 있는 textarea가 나온다.
//isReplying으로 세팅을 해줘야한다.
//배열로 만든다 [clickedId, isReplying]으로 만든다.

function ReviewComment(props) {
  const stars = "⭐".repeat(Number(props.review.reviewStars));

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
              </div>
              <div className="reviewComment-content-top__right">
                <div>{stars}</div>
              </div>
            </div>
            <div className="reviewComment-content_bottom">
              <div className="reviewComment-text">{props.review.reviewContent}</div>
            </div>
          </div>
        </div>
      </div>
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
    .reviewComment-content-top {
      display: flex;

      height: 50px;

      .reviewComment-content-top__left {
        display: flex;
        align-items: center;
        flex: auto;

        .reviewComment-author {
          font-weight: bold;
          font-size: 16px;
        }
        .reviewComment-CreatedAt {
          font-size: 16px;
          margin-left: 10px;
          opacity: 0.7;
        }
      }
      .reviewComment-content-top__right {
        display: flex;
        flex: auto;
        justify-content: end;
        padding-right: 5px;
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
