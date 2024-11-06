import React from "react";

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './AddQuestion.css';

const AddQuestion = props => {
    const [formState, inputHandler] = useForm(
        {
            
        },
        false
    );
}

export default AddQuestion;