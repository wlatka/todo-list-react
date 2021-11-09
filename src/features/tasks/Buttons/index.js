import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { Div, Button } from "./styled";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Div>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
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
    )
};

export default Buttons;