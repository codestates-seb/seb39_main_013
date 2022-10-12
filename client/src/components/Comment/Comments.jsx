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
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Comments(props) {
  const userInfo = useSelector((state) => state.user);

  const userName = userInfo.name;
  const userEmail = userInfo.email;
  const userIsLogin = userInfo.isLogin;
  //app에서 localStorage를 설정했기 때문에 get으로만 가져오면 된다.

  useEffect(() => {
    setDummyData(
      JSON.parse(localStorage.getItem("dataQuestions")).filter((question) => {
        return question.productId === props.productId;
      })
    );
    setDummyData2(
      JSON.parse(localStorage.getItem("dataAnswers")).filter((answer) => {
        return answer.productId === props.productId;
      })
    );
    setDummyData3(
      JSON.parse(localStorage.getItem("dataReviews")).filter((review) => {
        return review.productId === props.productId;
      })
    );
  }, []);

  //이미 localStorage에 저장이 되어있다면 해당 아이들을 가져온다.

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
  //const [clickedAnser, setClickedAnswer] = useState(null, false);
  //같은 로직으로 answer적용 answer는 후순위로 미뤄놨음

  const categoryItemList = ["Additional Info", "Reviews", "QnA"];
  const [clickedCategory, setClickedCategory] = useState(categoryItemList[0]);
  const [dummyData, setDummyData] = useState(null);
  const [dummyData2, setDummyData2] = useState(null);
  const [dummyData3, setDummyData3] = useState(null);

  //state안에 localstorage에 들어있는 것을 가져왔다. 그렇다면 함수 안에있는 것도 설정을 바꾸어 주어야 한다.

  const addComment = (newComment) => {
    setDummyData((curr) => {
      const newDummyData = [...curr, newComment];
      const newDataQuestions = [
        ...JSON.parse(localStorage.getItem("dataQuestions")),
        newComment,
      ];
      localStorage.removeItem("dataQuestions");
      localStorage.setItem("dataQuestions", JSON.stringify(newDataQuestions));
      return newDummyData;
    }); //set 함수를 이용해서 동기적으로 동작하게 만든다.

    return;
  };

  const addReplyComment = (newReply) => {
    //질문에 대한 답변을 추가해준다.
    setDummyData2((curr) => {
      const newDummyData2 = [...curr, newReply];
      const newDataAnswers = [
        ...JSON.parse(localStorage.getItem("dataAnswers")),
        newReply,
      ];
      localStorage.removeItem("dataAnswers");
      localStorage.setItem("dataAnswers", JSON.stringify(newDataAnswers));
      return newDummyData2;
    });
  };

  const addNewReview = (newReview) => {
    setDummyData3((curr) => {
      const newDummyData3 = [...curr, newReview];
      const newDataReviews = [
        ...JSON.parse(localStorage.getItem("dataReviews")),
        newReview,
      ];
      localStorage.removeItem("dataReviews");
      localStorage.setItem("dataReviews", JSON.stringify(newDataReviews));
      return newDummyData3;
    });

    return;
  }; //setDummyData3([...dummyData3, newReview]);

  const deleteQuestion = (questionId) => {
    //questionId 나 answerId에 맞추어서 삭제해준다.
    if (window.confirm("정말로 해당 질문을 삭제하시겠습니까?")) {
      const updatedQuestions = dummyData.filter(
        (question) => question.questionId !== questionId
      );
      let newDataQuestions = JSON.parse(localStorage.getItem("dataQuestions"));
      newDataQuestions = newDataQuestions.filter(
        (question) => question.questionId !== questionId
      );
      setDummyData(() => {
        localStorage.removeItem("dataQuestions");
        localStorage.setItem("dataQuestions", JSON.stringify(newDataQuestions));
        return updatedQuestions;
      });
    }
  };

  const deleteAnswer = (answerId) => {
    if (window.confirm("정말로 해당 답변을 삭제하시겠습니까?")) {
      const updatedAnswers = dummyData2.filter(
        (answer) => answer.answerId !== answerId
      );
      let newDataAnswers = JSON.parse(localStorage.getItem("dataAnswers"));
      newDataAnswers = newDataAnswers.filter(
        (answer) => answer.answerId !== answerId
      );
      setDummyData2(() => {
        localStorage.removeItem("dataAnswers");
        localStorage.setItem("dataAnswers", JSON.stringify(newDataAnswers));
        return updatedAnswers;
      });
    }
  };

  const deleteReview = (reviewId) => {
    if (window.confirm("정말로 해당 리뷰를 삭제하시겠습니까?")) {
      const updatedReviews = dummyData3.filter(
        (review) => review.reviewId !== reviewId
      );
      let newDataReviews = JSON.parse(localStorage.getItem("dataReviews"));
      newDataReviews = newDataReviews.filter(
        (review) => review.reviewId !== reviewId
      );
      setDummyData3(() => {
        localStorage.removeItem("dataReviews");
        localStorage.setItem("dataReviews", JSON.stringify(newDataReviews));
        return updatedReviews;
      });
    }
  };

  const updateQuestion = (questionId, text) => {
    let newDataQuestions = JSON.parse(localStorage.getItem("dataQuestions"));
    newDataQuestions = newDataQuestions.map((question) => {
      if (question.questionId === questionId) {
        return { ...question, questionContent: text };
      }
      return question;
    });
    const updatedQuestions = dummyData.map((question) => {
      if (question.questionId === questionId) {
        return { ...question, questionContent: text };
      }
      return question;
    });

    setDummyData(() => {
      localStorage.removeItem("dataQuestions");
      localStorage.setItem("dataQuestions", JSON.stringify(newDataQuestions));
      setClickedQuestion([questionId, false, false]);
      return updatedQuestions;
    });
  };

  const updateReview = (reviewId, text, clickedRadioBtn) => {
    let newDataReviews = JSON.parse(localStorage.getItem("dataReviews"));
    newDataReviews = newDataReviews.map((review) => {
      if (review.reviewId === reviewId) {
        return { ...review, reviewContent: text, reviewStars: clickedRadioBtn };
      }
      return review;
    });
    const updatedReview = dummyData3.map((review) => {
      if (review.reviewId === reviewId) {
        return { ...review, reviewContent: text, reviewStars: clickedRadioBtn };
      }
      return review;
    });

    setDummyData3(() => {
      localStorage.removeItem("dataReviews");
      localStorage.setItem("dataReviews", JSON.stringify(newDataReviews));
      setClickedReview([null, false]);
      return updatedReview;
    });
  };

  // category 컴포넌트에서 item을 고르는 경우에는 내려준setCateogry로 클릭된 상태를 바꿔준다.
  // category의 상태에 맞추어서 보여줄지 안보여줄지를 결정한다.

  return (
    <Container>
      <div>
        <CommentCategory
          setClickedCategory={setClickedCategory}
          name={categoryItemList}
        />
        {clickedCategory === categoryItemList[0] ? (
          <AdditionalInfo contentImg={props.contentImg} />
        ) : null}
        {clickedCategory === categoryItemList[2] ? (
          <>
            {dummyData?.map((comment) => (
              <Comment
                active={clickedQuestion[0] === comment.questionId} //
                isReplying={
                  clickedQuestion[0] === comment.questionId &&
                  clickedQuestion[1]
                }
                isEditing={
                  clickedQuestion[0] === comment.questionId &&
                  clickedQuestion[2]
                }
                setClickedQuestion={setClickedQuestion}
                item={comment}
                replies={getReplies(comment.questionId)}
                key={comment.questionId}
                addReplyComment={addReplyComment}
                deleteQuestion={deleteQuestion}
                updateQuestion={updateQuestion}
                deleteAnswer={deleteAnswer}
                commentEmail={comment.questionEmail}
                userName={userName}
                userEmail={userEmail}
                userIsLogin={userIsLogin}
                productId={props.productId}
              />
            ))}
            <QnaForm
              addComment={addComment}
              userName={userName}
              userEmail={userEmail}
              userIsLogin={userIsLogin}
              productId={props.productId}
            />
          </>
        ) : null}

        {clickedCategory === categoryItemList[1] ? (
          <>
            {dummyData3?.map((review) => (
              <ReviewComment //
                key={review.reviewId}
                review={review}
                deleteReview={deleteReview}
                setClickedReview={setClickedReview}
                isEditing={
                  clickedReview[0] === review.reviewId && clickedReview[1]
                }
                updateReview={updateReview}
                userName={userName}
                userEmail={userEmail}
                UserIsLogin={userIsLogin}
              />
            ))}
            <ReviewForm //
              addNewReview={addNewReview}
              userName={userName}
              userEmail={userEmail}
              userIsLogin={userIsLogin}
              productId={props.productId}
              productName={props.productName}
            />
          </>
        ) : null}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export default Comments;
