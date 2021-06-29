import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="buttons">
        <button className="buttons__button">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
        </button>
        <button
            className="buttons__button"
            disabled={tasks.every(({ done }) => done)}
        >
            Zakończ wszystkie
        </button>

    </div>
)

export default Buttons;