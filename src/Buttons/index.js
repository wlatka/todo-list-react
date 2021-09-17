import React, { Fragment } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  background: transparent;
  color: hsl(180, 100%, 19%);
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;
  font-size: 14px;

  &.hover {
    color: hsl(180, 100%, 35%);
  }

  &.disabled {
    color: #ccc;
  }

  @media(max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Div>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} zakończone
                </Button>
                <Button
                    onClick={setAllDone}
                    autofocus
                    disabled={tasks.every(({ done }) => done)}
                >
                    Zakończ wszystkie
                </Button>
            </>
        )}
    </Div>
);

export default Buttons;