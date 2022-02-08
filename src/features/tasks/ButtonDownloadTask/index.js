import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchExampleTasks,
    selectLoading
} from "../tasksSlice";
import { Div, Button } from "../Buttons/styled";

const ButtonDownloadTask = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (
        <Div>
            <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </Div>
    )
};

export default ButtonDownloadTask;