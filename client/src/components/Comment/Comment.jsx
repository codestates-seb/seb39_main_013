/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { MdOutlineModeComment } from "react-icons/md";
import ReplyComment from "./ReplyComment";
import ReplyCommentForm from "./ReplyCommentForm";

//특정 질문을 클릭하면 아래에 이에 관한 답변이 나와야 한다.
//특정 질문을 클릭하면 상위컴포넌트에서 상태를 관리해 주어야 한다. commetId중에 현재 클릭된 아이를 저장할 수 있어야 한다.
//클릭이 된 아이는 state에 id값이 저장이 된다.
//다시 렌더링 하는 과정에서 click된 아이는 replies를 화면에 보여주게 한다.
//새로운 아이가 클릭되면 state를 변경해준다.

//댓글아이콘을 누르면 댓글과 함께 답변을 입력할 수 있는 textarea가 나온다.
//isReplying으로 세팅을 해줘야한다.
//배열로 만든다 [clickedId, isReplying]으로 만든다.

function Comment(props) {
  const stars = "👍".repeat(Number(props.item.questionStars));

  return (
    <Container>
      <div className="comment">
        <div className="comment-image-container">
          <img src="/user-icon.png"></img>
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-content-top">
              <div className="comment-content-top__left">
                <div className="comment-author">{props.item.questionName}</div>
                <div className="comment-CreatedAt">{props.item.questionCreatedAt}</div>
              </div>
              <div className="comment-content-top__right">
                <div>{stars}</div>
              </div>
            </div>
            <div className="comment-content_bottom">
              <div className="comment-text" onClick={() => props.setClickedQuestion([props.item.questionId, false])}>
                {props.item.questionContent}
              </div>
              <div className="comment-replyIcon">
                <MdOutlineModeComment className="replyIcon" onClick={() => props.setClickedQuestion([props.item.questionId, true])} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.active ? <div className="replyBox">{props.replies.length > 0 ? props.replies.map((reply) => <ReplyComment reply={reply} key={reply.answerId} />) : null}</div> : null}
      {props.isReplying ? <ReplyCommentForm /> : null}
    </Container>
  );
}

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3px 0;

  .replyBox {
    width: 100%;
  }

  .comment {
    display: flex;
    width: 70%;
    height: auto;
    border-bottom: 2px solid rgba(124, 124, 124, 0.5);
    box-sizing: border-box;
    margin-top: 20px;
  }

  .comment-image-container {
    img {
      border-radius: 50px;
    }
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comment-right-part {
    flex: auto;
    .comment-content-top {
      display: flex;

      height: 50px;

      .comment-content-top__left {
        display: flex;
        align-items: center;
        flex: auto;

        .comment-author {
          font-weight: bold;
          font-size: 16px;
        }
        .comment-CreatedAt {
          font-size: 16px;
          margin-left: 10px;
          opacity: 0.7;
        }
      }
      .comment-content-top__right {
        display: flex;
        flex: auto;
        justify-content: end;
        padding-right: 5px;
      }
    }
    .comment-content_bottom {
      .comment-text {
        height: auto;
      }
      .comment-replyIcon {
        display: flex;
        justify-content: end;
        margin-right: 10px;
        padding: 5px 0;
        font-size: 27px;
        .replyIcon {
          cursor: pointer;
        }
      }
    }
  }
`;

export default Comment;
