import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";
import AboutMe from "./AboutMe/index";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Tymoteusz Wójcik"
            body={<AboutMe />}
        />
    </Container>
);

export default AuthorPage;