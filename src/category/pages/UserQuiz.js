import React from "react";
import { useParams } from 'react-router-dom';

import QuizList from "../components/QuizList";

const DUMMY_QUESTION = [
    {
        id: 'p1',
        category: 'Computer Science',
        question: 'One of the most famous sky scrapers in the worls',
        option1: '32',
        option2: '25',
        option3: '76',
        option4: '22',
        ans: '25'
    },
];

const UserQuiz = () => {
    const categoryId = useParams().categoryId;
    const loadedQuestion = DUMMY_QUESTION.filter(que => que.creator === categoryId);
    return <QuizList items={loadedQuestion} />
};

export default UserQuiz;