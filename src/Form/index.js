import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" autofocus required placeholder="Zadania na dziś!" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;