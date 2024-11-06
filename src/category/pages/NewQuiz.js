import React from 'react';

import './QuizForm.css';
import { Link } from 'react-router-dom';

const NewQuiz = props => {

    return (
        <form className="quiz-form">
            <div className="form-container">
                <Link to={`/${props.id}/category`}>
                    <div className="form-header">
                        <h2 className="form-title">Add New Category</h2>
                    </div>
                </Link>
                <Link to={`/${props.id}/category`}>  
                    <div className="form-header">
                        <h2 className="form-title">Add new Question</h2>
                    </div>
                </Link>
            </div>
        </form>
    );
};

export default NewQuiz;
