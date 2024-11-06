import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';
import './QuizItem.css';

const QuizItem = props => {
    const auth = useContext(AuthContext);

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log('DELETING...');
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <React.Fragment>
            {/* model of delete */}
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="quiz-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETE
                        </Button>
                    </React.Fragment>
                }
            >
                <p>
                    Do you want to proceed and delete this Quiz? Please note that it
                    can't be undone thereafter.
                </p>
            </Modal>

            {/* list of quiz */}
            <li className="quiz-item">
                <Card className="quiz-item__content">
                    <div className='quiz-item__question'>
                        <h3>{props.question}</h3>
                    </div>
                    <div className="quiz-item__info">
                        <label>
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}
                            />
                            <span className="quiz-item__option">a. {props.option1}</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}
                            />
                            <span className="quiz-item__option">b. {props.option2}</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleOptionChange}
                            />
                            <span className="quiz-item__option">c. {props.option3}</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="option4"
                                checked={selectedOption === 'option4'}
                                onChange={handleOptionChange}
                            />
                            <span className="quiz-item__option">d. {props.option4}</span>
                        </label>
                    </div>

                    <div className="quiz-item__actions">
                        <Button to={`/quiz/${props.id}`}>NEXT</Button>
                        {auth.isLoggedIn && (
                            <Button to={`/quiz/${props.id}`}>EDIT</Button>
                        )}
                        {auth.isLoggedIn && (
                            <Button danger onClick={showDeleteWarningHandler}>
                                DELETE
                            </Button>
                        )}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default QuizItem;
