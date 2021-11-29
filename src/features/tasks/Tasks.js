import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

function TasksPage() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista Zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />} />
        <Section
          title="Lista zadań"
          body={<Tasks />}
          extraHeaderContent={<Buttons />} />
      </Container>
    </ThemeProvider>
  );
}

export default TasksPage;