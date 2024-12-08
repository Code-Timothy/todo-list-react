import "./index.css";
import Form from "./Form";

function App() {
  return (
    <main className="container">
      <header className="header">
        <h1>Lista zadań</h1>
      </header>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Dodaj nowe zadanie</h2>
        </header>
        <div className="section__content">
          <Form />
        </div>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Lista zadań</h2>
          <div className="buttons"></div>
        </header>
        <div className="section__content">
          <ul className="tasksList"></ul>
        </div>
      </section>
    </main>
  );
}

export default App;
