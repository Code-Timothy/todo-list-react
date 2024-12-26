import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={
                    <>
                        <strong>Ukończono: </strong> {task ? (task.done ? "Tak" : "Nie") : ""}
                    </>
                }
            />
        </Container>
    );
};

export default TaskPage;