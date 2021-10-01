import React from "react";
import { Div, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Div>
        {tasks.length > 0 && (
            <>
                <Button 
                    onClick={toggleHideDone}
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
);

export default Buttons;