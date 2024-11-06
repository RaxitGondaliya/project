import React from "react";

import Card from '../../shared/components/UIElements/Card';
import QuizItem from "./QuizItem";
// import Button from "../../shared/components/FormElements/Button";
import './QuizList.css';

const QuizList = props => {
    if (props.items.length === 0) {
        return (
            <div className="quiz-list center">
                <Card>
                    <h2>NO Quiz found</h2>
                </Card>
            </div>
        );
    }

    return <ul className="quiz-list">
        {props.items.map(que => (
            <QuizItem
                key={que.id}
                id={que.id}
                question={que.question}
                option1={que.option1}
                option2={que.option2}
                option3={que.option3}
                option4={que.option4}
                ans={que.ans}
            />
        ))}
    </ul>
};

export default QuizList;