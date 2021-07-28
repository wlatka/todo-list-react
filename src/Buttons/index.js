import "./style.css";
import React, { Fragment } from "react";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <Fragment>
                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} zakończone
                </button>
                <button
                    className="buttons__button"
                    autofocus
                    disabled={tasks.every(({ done }) => done)}
                >
                    Zakończ wszystkie
                </button>
            </Fragment>
        )}
    </div>
)

export default Buttons;