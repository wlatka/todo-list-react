import { useSelector } from "react-redux";
import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { selectTasks } from "./tasksSlice";


function TasksPage(removeTask, addNewTask, toggleTaskDone, setAllDone) {

  const { tasks } = useSelector(selectTasks);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista Zadań" />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />} />

        <Section
          title="Lista zadań"
          body={<Tasks
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />}
          extraHeaderContent={<Buttons
            setAllDone={setAllDone} />} />
      </Container>
    </ThemeProvider>
  );
}

export default TasksPage;