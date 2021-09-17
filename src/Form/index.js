import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  grid-gap: 10px;
`;

const Input = styled.input`
  flex-grow: 3;
  padding-left: 10px;  
`;

const Button = styled.button`
  flex-grow: 1;
  background-color: hsl(180, 100%, 19%);
  color: white;
  border-style: none;
  height: 30px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: 1.0s;

  &.hover {
    transform: scale(1.1);
    background-color: hsl(180, 100%, 29%);
  }

  &.active {
    background: hsl(180, 100%, 34%);
  }
`;

const Form = ({ addNewTask, className }) => {
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
    <StyledForm className={className} onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        ref={inputRef}
        required
        placeholder="Zadania na dziś!"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;