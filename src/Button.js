import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSyncAlt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Button.scss';

function Button({text, action, loading}) {

    text = text || 'Submit';

    return (
        <div className="button" onClick={() => action()}>
            <div className="button__leftIcon"></div>
            <div className="button__text"> {text} </div>
            <div className="button__rightIcon">
                {loading ? 
                    <FontAwesomeIcon icon={faSyncAlt} /> :
                    <FontAwesomeIcon icon={faArrowRight} />
                }
            </div>
        </div>
    ); 
}

export default Button;