/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { MdOutlineModeComment } from "react-icons/md";
import ReplyComment from "./ReplyComment";
import ReplyCommentForm from "./ReplyCommentForm";
import UpdateCommentForm from "./UpdateCommentForm";

import { useState } from "react";

//특정 질문을 클릭하면 아래에 이에 관한 답변이 나와야 한다.
//특정 질문을 클릭하면 상위컴포넌트에서 상태를 관리해 주어야 한다. commetId중에 현재 클릭된 아이를 저장할 수 있어야 한다.
//클릭이 된 아이는 state에 id값이 저장이 된다.
//다시 렌더링 하는 과정에서 click된 아이는 replies를 화면에 보여주게 한다.
//새로운 아이가 클릭되면 state를 변경해준다.

//댓글아이콘을 누르면 댓글과 함께 답변을 입력할 수 있는 textarea가 나온다.
//isReplying으로 세팅을 해줘야한다.
//배열로 만든다 [clickedId, isReplying]으로 만든다.

function Comment(props) {
  return (
    <Container>
      <div className={"comment " + (props.active ? "activated" : null)}>
        <div className="comment-image-container">
          <img src="/user-icon.png"></img>
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-content-top">
              <div className="comment-content-top__left">
                <div className="comment-author">{props.item.questionName}</div>

                <div className="comment-CreatedAt">{props.item.questionCreatedAt}</div>
                {props.userIsLogin && props.userEmail === props.commentEmail ? <button onClick={() => props.setClickedQuestion([props.item.questionId, false, true])}>질문 수정하기</button> : null}
                {props.userIsLogin && props.userEmail === props.commentEmail ? <button onClick={() => props.deleteQuestion(props.item.questionId)}>질문 삭제하기</button> : null}
              </div>
            </div>
            <div className="comment-content_bottom">
              <div className="comment-text" onClick={() => props.setClickedQuestion([props.item.questionId, false, false])}>
                {props.item.questionContent}
              </div>
              <div className="comment-replyIconBox">
                <button onClick={() => props.setClickedQuestion([props.item.questionId, true, false])} className="comment-replyIcon">
                  <MdOutlineModeComment className="replyIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.active ? (
        <div className="replyBox">
          {props.replies.length > 0
            ? props.replies.map((reply) => (
                <ReplyComment //
                  reply={reply}
                  key={reply.answerId}
                  deleteAnswer={props.deleteAnswer}
                  updateAnswer={props.updateAnswer}
                  initialText={reply.answerContent}
                  userEmail={props.userEmail}
                  userIsLogin={props.userIsLogin}
                />
              ))
            : null}
        </div>
      ) : null}
      {props.isReplying ? (
        <ReplyCommentForm
          addReplyComment={props.addReplyComment} //
          replyparent={props.item}
          userName={props.userName}
          userEmail={props.userEmail}
          productId={props.productId}
        />
      ) : null}
      {props.isEditing ? (
        <UpdateCommentForm //
          updateQuestion={props.updateQuestion}
          initialText={props.item.questionContent}
          questionId={props.item.questionId}
          setClickedQuestion={props.setClickedQuestion}
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

  .replyBox {
    width: 100%;
  }

  .comment {
    display: flex;
    width: 100%;
    max-width: 836px;
    height: auto;
    border-bottom: 1px solid rgba(124, 124, 124, 0.5);
    box-sizing: border-box;
    margin-top: 20px;
  }

  .activated {
    border: 3px solid rgba(29, 29, 29, 0.5);
    border-radius: 5px;
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
    flex: 100%;
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
          margin: 0 10px;
          opacity: 0.7;
        }

        button {
          margin: 0 3px;
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
    }
    .comment-content_bottom {
      word-break: break-all;
      .comment-text {
        height: auto;
        cursor: pointer;
      }
      .comment-replyIconBox {
        display: flex;
        justify-content: end;
        margin-right: 10px;
        .comment-replyIcon {
          border: 0;
          outline: 0;
          background-color: white;
        }
        .replyIcon {
          font-size: 25px;
        }
      }
    }
  }
`;

export default Comment;
