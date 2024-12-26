import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Tymoteusz Wójcik"
            body={
                <p>About me</p>
            }
        />
    </Container>
);

export default AuthorPage;