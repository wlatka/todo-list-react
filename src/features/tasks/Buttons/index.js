import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
} from "../tasksSlice";
import { Div, Button } from "./styled";

const Buttons = () => {
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
                        onClick={() => dispatch(setAllDone())}
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