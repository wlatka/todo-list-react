import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks
} from "../tasksSlice";
import { Div, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Div>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz zadanie
            </Button>
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