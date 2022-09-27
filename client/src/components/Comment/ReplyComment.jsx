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
            <div className="ReaplyComment-content-top">
              <div className="ReaplyComment-content-top__left">
                <div className="replyComment-author">{props.reply.answerName}</div>
                <div className="replyComment-CreatedAt">{props.reply.answerCreatedAt}</div>
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
  margin: 10px 0;

  .replyComment {
    display: flex;
    width: 100%;
    max-width: 836px;
    height: auto;
    border-bottom: 2px solid rgba(124, 124, 124, 0.5);
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

    .ReaplyComment-content-top {
      display: flex;
      height: 15px;
      padding-top: 9px;

      .ReaplyComment-content-top__left {
        display: flex;
        align-items: center;
        flex: auto;

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
      .replyComment-text {
        height: auto;
        padding: 10px 0;
      }
    }
  }
`;

export default ReplyComment;
