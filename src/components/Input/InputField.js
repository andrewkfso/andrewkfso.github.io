import React from "react";
import './InputField.css';

export default function InputField() {
    return (
        <div class="inputGroup">
            <input type="text" required="" autocomplete="off" />
            <label for="text">Name</label>
        </div>
    )
}