import { useSelector } from "react-redux";
import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { selectTasks } from "./tasksSlice";



function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const { tasks } = useSelector(selectTasks);

  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      };

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(task => task.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista Zadań" />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />

        <Section
          title="Lista zadań"
          body={
            <Tasks
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone} />
          }
          extraHeaderContent={
            <Buttons
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
};

export default Tasks;