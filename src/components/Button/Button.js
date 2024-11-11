import React from 'react';
import './Button.css';

export default function Button({ buttonText }) {
    return (
        <button class="learn-more">
            <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
            </span>
            <span class="button-text">{buttonText}</span>
        </button>
    );
}