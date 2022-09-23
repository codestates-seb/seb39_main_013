import React from "react";
import styled from "styled-components";
import { MdOutlineModeComment } from "react-icons/md";

function Comment() {
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
                <div className="comment-author">하키하키하키</div>
                <div className="comment-CreatedAt">{new Date().toLocaleString()}</div>
              </div>
              <div className="comment-content-top__right">
                <div>👍👍👍👍👍</div>
              </div>
            </div>
            <div className="comment-content_bottom">
              <div className="comment-text">comment의 내용이다.</div>
              <div className="comment-replyIcon">
                <MdOutlineModeComment />
              </div>
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

  .comment {
    display: flex;
    width: 70%;
    border-bottom: 2px solid rgba(124, 124, 124, 0.5);
    box-sizing: border-box;
    padding-top: 20px;
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
    border: 2px solid red;
    flex: auto;
    .comment-content-top {
      display: flex;
      border: 2px solid red;

      .comment-content-top__left {
        border: 2px solid red;
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
        border: 2px solid red;
        display: flex;
        flex: auto;
        justify-content: end;
        padding-right: 5px;
      }
    }
    .comment-content_bottom {
      .comment-replyIcon {
        display: flex;
        justify-content: end;
        margin-right: 10px;
        padding: 5px 0;
        font-size: 20px;
      }
    }
  }
`;

export default Comment;
