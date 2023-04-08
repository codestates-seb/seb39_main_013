/* eslint-disable */
import React from "react";
import styled from "styled-components";

function ReplyComment(props) {
  return (
    <Container>
      <div className="replyComment">
        <div className="replyComment-image-container">
          <img src="/user-icon.png"></img>
        </div>
        <div className="replyComment-right-part">
          <div className="ReaplyComment-content">
            <div className="ReplyComment-content-top">
              <div className="ReplyComment-content-top__left">
                <div className="replyComment-author">{props.reply.answerName}</div>
                <div className="replyComment-CreatedAt">{props.reply.answerCreatedAt}</div>

                {props.userIsLogin && props.userEmail === props.reply.answerEmail ? ( //
                  <button onClick={() => props.deleteAnswer(props.reply.answerId)}>답변 삭제</button>
                ) : null}
              </div>
            </div>
            <div className="ReaplyComment-content_bottom">
              <div className="replyComment-text">{props.reply.answerContent}</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  .replyComment {
    display: flex;
    width: 100%;
    max-width: 836px;
    height: auto;
    border-bottom: 1px solid rgba(124, 124, 124, 0.5);
    box-sizing: border-box;
    margin-top: 5px;
    padding-bottom: 10px;
    padding-left: 4%;
  }

  .replyComment-image-container {
    img {
      border-radius: 50px;
    }
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .replyComment-right-part {
    flex: auto;
    display: flex;

    .ReplyComment-content-top {
      display: flex;
      height: 15px;
      padding-top: 9px;

      .ReplyComment-content-top__left {
        display: flex;
        align-items: center;
        flex: auto;
        button {
          margin: 0 3px;
          padding: 3px 7px;
          font-size: 14px;
          border: none;
          outline: none;
          border-radius: 5px;
          background-color: rgba(255, 93, 93, 0.87);
        }

        .replyComment-author {
          font-weight: bold;
          font-size: 16px;
        }
        .replyComment-CreatedAt {
          font-size: 16px;
          margin-left: 10px;
          opacity: 0.7;
        }
      }
    }
    .ReaplyComment-content_bottom {
      margin-top: 10px;
      .replyComment-text {
        height: auto;
        padding: 10px 0;
      }
    }
  }
`;

export default ReplyComment;
