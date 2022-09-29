/* eslint-disable */
import React from "react";
import styled from "styled-components";
import CommentCategory from "../Commons/CommentCategory";
import Comment from "./Comment";
import AdditionalInfo from "../ProductDetail/AdditionalInfo";
import ReviewForm from "./ReviewForm";

import { useState } from "react";
import ReviewComment from "./ReviewComment";
import QnaForm from "./QnaForm";
let testData = [
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

let testData2 = [
  {
    answerId: 101,
    parentQuestion: 1,
    answerName: "포키포키포키",
    answerCreatedAt: "2022. 9. 26. 오후 8:53:26",
    answerContent: "답변 내용1",
  },
  {
    answerId: 102,
    parentQuestion: 2,
    answerName: "포키포키포키2",
    answerCreatedAt: "2022. 9. 27. 오후 8:53:26",
    answerContent: "답변 내용2",
  },
  {
    answerId: 103,
    parentQuestion: 3,
    answerName: "포키포키포키3",
    answerCreatedAt: "2022. 9. 28. 오후 8:53:26",
    answerContent: "답변 내용3",
  },
  {
    answerId: 104,
    parentQuestion: 2,
    answerName: "포키포키포키5",
    answerCreatedAt: "2022. 9. 28. 오후 8:53:26",
    answerContent: "답변 내용5",
  },
];

let testData3 = [
  {
    reviewId: 1001,
    reviewName: "리뷰리뷰리뷰1",
    reviewCreatedAt: "2022. 9. 26. 오후 8:53:26",
    reviewContent: "리뷰의 내용1",
    reviewStars: 4,
  },
  {
    reviewId: 1002,
    reviewName: "리뷰리뷰리뷰2",
    reviewCreatedAt: "2022. 9. 27. 오후 8:53:26",
    reviewContent: "리뷰의 내용2",
    reviewStars: 3,
  },
  {
    reviewId: 1003,
    reviewName: "리뷰리뷰리뷰3",
    reviewCreatedAt: "2022. 9. 28. 오후 8:53:26",
    reviewContent: "리뷰의 내용3",
    reviewStars: 5,
  },
];

function Comments() {
  const getReplies = (questionId) => {
    return dummyData2.filter((item) => item.parentQuestion === questionId);
  };
  const [clickedQuestion, setClickedQuestion] = useState([null, false, false]);
  //리스트의 0번 인덱스는 현재 클릭된 질문의 번호이다.
  //리스트의 1번 인덱스는 isReplying을 결정한다. boolean값으로 저장한다.
  //리스트의 2번 인덱스는 isEditing을 결정한다. boolean값으로 저장한다.
  const [clickedReview, setClickedReview] = useState([null, false]);
  //리스트의 0번 인덱스틑 현재 클릭된 리뷰의 번호이다.
  //리스트의 1번 인덱스는 isEditing을 결정한다. boolean값으로 저장한다.

  console.log(clickedQuestion);
  const categoryItemList = ["Additional Info", "Reviews", "QnA"];
  const [clickedCategory, setClickedCategory] = useState(categoryItemList[0]);
  const [dummyData, setDummyData] = useState(testData);
  const [dummyData2, setDummyData2] = useState(testData2);
  const [dummyData3, setDummyData3] = useState(testData3);
  console.log(dummyData);

  const addComment = (newComment) => {
    setDummyData([...dummyData, newComment]);
    return;
  };

  const addReplyComment = (newReply) => {
    //질문에 대한 답변을 추가해준다.
    setDummyData2([...dummyData2, newReply]);
    return;
  };

  const addNewReview = (newReview) => {
    setDummyData3([...dummyData3, newReview]);
    return;
  };

  const deleteQuestion = (questionId) => {
    //questionId 나 answerId에 맞추어서 삭제해준다.
    const updatedDummyData = dummyData.filter((question) => question.questionId !== questionId);
    setDummyData(updatedDummyData);
    const updatedDummyData2 = dummyData2.filter((answer) => answer.parentQuestion !== questionId);
    setDummyData2(updatedDummyData2);
  };

  const deleteAnswer = (answerId) => {
    const updatedDummyData2 = dummyData2.filter((answer) => answer.answerId !== answerId);
    setDummyData2(updatedDummyData2);
  };

  const deleteReview = (reviewId) => {
    const updatedDummyData3 = dummyData3.filter((review) => review.reviewId !== reviewId);
    setDummyData3(updatedDummyData3);
  };

  const updateQuestion = (questionId, text) => {
    const updatedDummyData = dummyData.map((question) => {
      if (question.questionId === questionId) {
        return { ...question, questionContent: text };
      }
      return question;
    });

    setDummyData(updatedDummyData);
    setClickedQuestion([questionId, false, false]);
  };

  const updateReview = (reviewId, text, clickedRadioBtn) => {
    const updatedDummyData3 = dummyData3.map((review) => {
      if (review.reviewId === reviewId) {
        return { ...review, reviewContent: text, reviewStars: clickedRadioBtn };
      }
      return review;
    });

    setDummyData3(updatedDummyData3);
    setClickedReview(reviewId, false);
  };

  const updateAnswer = (answerId, text) => {};

  console.log("dummyData1 =>>>>>>");
  console.log(dummyData);
  console.log("dummyData2 =>>>>>>");
  console.log(dummyData2);
  const editComment = (questionId, answerId) => {
    //questionId나 answerId에 맞추어서 수정해준다.
  };
  // category 컴포넌트에서 item을 고르는 경우에는 내려준setCateogry로 클릭된 상태를 바꿔준다.
  // category의 상태에 맞추어서 보여줄지 안보여줄지를 결정한다.

  return (
    <Container>
      <div>
        <CommentCategory setClickedCategory={setClickedCategory} name={categoryItemList} />
        {clickedCategory === categoryItemList[0] ? <AdditionalInfo contentImg={["https://th3point.speedgabia.com/fluke/2022FW/FLT/flt709-1-1.jpg", "https://th3point.speedgabia.com/fluke/2022FW/FLT/flt709-1-2-m.jpg"]} /> : null}
        {clickedCategory === categoryItemList[2] ? (
          <>
            {dummyData.map((comment) => (
              <Comment
                active={clickedQuestion[0] === comment.questionId} //
                isReplying={clickedQuestion[0] === comment.questionId && clickedQuestion[1]}
                isEditing={clickedQuestion[0] === comment.questionId && clickedQuestion[2]}
                setClickedQuestion={setClickedQuestion}
                item={comment}
                replies={getReplies(comment.questionId)}
                key={comment.questionId}
                addReplyComment={addReplyComment}
                deleteQuestion={deleteQuestion}
                updateQuestion={updateQuestion}
                deleteAnswer={deleteAnswer}
                updateAnswer={updateAnswer}
              />
            ))}
            <QnaForm addComment={addComment} />
          </>
        ) : null}

        {clickedCategory === categoryItemList[1] ? (
          <>
            {dummyData3.map((review) => (
              <ReviewComment //
                key={review.reviewId}
                review={review}
                deleteReview={deleteReview}
                setClickedReview={setClickedReview}
                isEditing={clickedReview[0] === review.reviewId && clickedReview[1]}
                updateReview={updateReview}
              />
            ))}
            <ReviewForm addNewReview={addNewReview} />
          </>
        ) : null}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

export default Comments;
