import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                ref={inputRef}
                required
                placeholder="Zadania na dziś!"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button onClick={focusInput} className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;