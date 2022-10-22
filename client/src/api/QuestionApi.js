export const getQuestions = async () => {
  return [
    {
      question_id: 1,
      product_id: 1,
      member_id: 100,
      member_nickname: "Jack",
      question_content: "Question Content",
      question_secret: true,
      created_at: "2021-08-16T23:00:33.010+02:00",
      updated_at: "2021-08-17T23:00:33.010+02:00",
    },
    {
      question_id: 2,
      product_id: 2,
      member_id: 200,
      member_nickname: "Jack2",
      question_content: "Question Content2",
      question_secret: true,
      created_at: "2021-08-18T23:00:33.010+02:00",
      updated_at: "2021-08-19T23:00:33.010+02:00",
    },
    {
      question_id: 3,
      product_id: 3,
      member_id: 300,
      member_nickname: "Jack3",
      question_content: "Question Content3",
      question_secret: false,
      created_at: "2021-08-16T23:00:33.010+02:00",
      updated_at: "2021-08-17T23:00:33.010+02:00",
    },
    {
      question_id: 4,
      product_id: 4,
      member_id: 400,
      member_nickname: "Jack4",
      question_content: "Question Content4",
      question_secret: true,
      created_at: "2021-08-16T23:00:33.010+02:00",
      updated_at: "2021-08-17T23:00:33.010+02:00",
    },
    {
      question_id: 5,
      product_id: 5,
      member_id: 500,
      member_nickname: "Jack",
      question_content: "Question Content5",
      question_secret: true,
      created_at: "2021-08-16T23:00:33.010+02:00",
      updated_at: "2021-08-17T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, product_id, member_id, member_nickname, updated_at = null) => {
  return {
    question_id: Math.random().toString(36).substr(2, 9),
    product_id: product_id,
    member_id: member_id,
    member_nickname: member_nickname,
    question_content: text,
    createdAt: new Date().toISOString(),
    updated_at: updated_at,
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
