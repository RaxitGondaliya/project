import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
    VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './QuizForm.css';

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
    {
        id: 'p2',
        category: 'Computer Science',
        question: 'One of the most famous sky scrapers in the worls',
        option1: '320',
        option2: '250',
        option3: '760',
        option4: '224',
        ans: '250'
    }
];

const UpdateQuiz = () => {
    const [isLoading, setIsLoading] = useState(true);
    const quizId = useParams().quizId;;

    const [formState, inputHandler, setFormData] = useForm(
        {
            question: {
                value: '',
                isValid: false
            },
            option1: {
                value: '',
                isValid: false
            },
            option2: {
                value: '',
                isValid: false
            },
            option3: {
                value: '',
                isValid: false
            },
            option4: {
                value: '',
                isValid: false
            },
            ans: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const identifiedQuestion = DUMMY_QUESTION.find(p => p.id === quizId);

    useEffect(() => {
        if (identifiedQuestion) {
            setFormData(
                {
                    question: {
                        value: identifiedQuestion.question,
                        isValid: true
                    },
                    option1: {
                        value: identifiedQuestion.option1,
                        isValid: true
                    },
                    option2: {
                        value: identifiedQuestion.option2,
                        isValid: true
                    },
                    option3: {
                        value: identifiedQuestion.option3,
                        isValid: true
                    },
                    option4: {
                        value: identifiedQuestion.option4,
                        isValid: true
                    },
                    ans: {
                        value: identifiedQuestion.ans,
                        isValid: true
                    },
                },
                true
            );
        }
        setIsLoading(false);
    }, [setFormData, identifiedQuestion]);

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedQuestion) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find question!</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="question"
                element="input"
                type="text"
                label="Question"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid question."
                onInput={inputHandler}
                initialValue={formState.inputs.title?.value}
                initialValid={formState.inputs.title?.isValid}
            />
            <Input
                id="option1"
                element="input"
                type="text"
                label="Option1"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid option."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="option2"
                element="input"
                type="text"
                label="Option2"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid option."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="option3"
                element="input"
                type="text"
                label="Option3"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid option."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="option4"
                element="input"
                type="text"
                label="Option4"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid option."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="ans"
                element="input"
                type="text"
                label="Answer"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid option."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE QUESTION
            </Button>
        </form>
    );
};

export default UpdateQuiz;
