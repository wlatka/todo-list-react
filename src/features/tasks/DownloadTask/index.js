import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchExampleTasks
} from "../tasksSlice";
import { Div, Button } from "../styled";

const DownloadTask = () => {
    const dispatch = useDispatch();
    return (
        <Div>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                <>Pobierz zadanie</>
            </Button>
        </Div>
    )
};

export default DownloadTask;