/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { MdOutlineModeComment } from "react-icons/md";
import ReplyComment from "./ReplyComment";

function Comment(props) {
  const stars = "👍".repeat(Number(props.item.questionStars));
  console.log(props.replies);
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
              <div className="comment-text">{props.item.questionContent}</div>
              <div className="comment-replyIcon">
                <MdOutlineModeComment className="replyIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="replyBox">{props.replies.length > 0 ? props.replies.map((reply) => <ReplyComment reply={reply} key={reply.answerId} />) : null}</div>
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
