import React from "react";
import './FlipCard.css'

export default function FlipCard({ cardTitle, cardSubtitle, cardContent, bodyText }) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">{cardTitle}</p>
                    <p>{cardSubtitle}</p>
                </div>
                <div class="flip-card-back">
                    <p class="title">{cardContent}</p>
                    <p>{bodyText}</p>
                </div>
            </div>
        </div>
    );
}