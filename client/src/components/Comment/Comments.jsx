/* eslint-disable */
import React from "react";
import styled from "styled-components";
import CommentCategory from "./CommentCategory";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";
import { useState } from "react";

const dummyData = [
  {
    questionId: 1,
    questionName: "하키하키하키",
    questionCreatedAt: "2022. 9. 25. 오후 8:53:26",
    questionContent: "Comment의 내용1",
    questionStars: 1,
  },
  {
    questionId: 2,
    questionName: "하키하키하키2",
    questionCreatedAt: "2022. 9. 26. 오후 8:53:26",
    questionContent: "Comment의 내용2",
    questionStars: 4,
  },
  {
    questionId: 3,
    questionName: "하키하키하키3",
    questionCreatedAt: "2022. 9. 27. 오후 8:53:26",
    questionContent: "Comment의 내용3",
    questionStars: 5,
  },
];

const dummyData2 = [
  {
    answerId: 1,
    parentQuestion: 1,
    answerName: "포키포키포키",
    answerCreatedAt: "2022. 9. 26. 오후 8:53:26",
    answerContent: "답변 내용1",
  },
  {
    answerId: 2,
    parentQuestion: 2,
    answerName: "포키포키포키2",
    answerCreatedAt: "2022. 9. 27. 오후 8:53:26",
    answerContent: "답변 내용2",
  },
  {
    answerId: 3,
    parentQuestion: 3,
    answerName: "포키포키포키3",
    answerCreatedAt: "2022. 9. 28. 오후 8:53:26",
    answerContent: "답변 내용3",
  },
  {
    answerId: 4,
    parentQuestion: 2,
    answerName: "포키포키포키5",
    answerCreatedAt: "2022. 9. 28. 오후 8:53:26",
    answerContent: "답변 내용5",
  },
];

function Comments() {
  const getReplies = (questionId) => {
    return dummyData2.filter((item) => item.parentQuestion === questionId);
  };
  const [clickedQuestion, setClickedQuestion] = useState(null);
  console.log(clickedQuestion);

  return (
    <Container>
      <div>
        <CommentCategory name={["Additional Info", "Reviews", "QnA"]} />
        {dummyData.map((comment) => (
          <Comment active={clickedQuestion === comment.questionId} setClickedQuestion={setClickedQuestion} item={comment} replies={getReplies(comment.questionId)} key={comment.questionId} />
        ))}
      </div>
      <p>======================================================================================================================================================</p>
    </Container>
  );
}

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }
`;

export default Comments;
