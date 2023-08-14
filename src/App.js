

function App() {
  return (
    <div className="container">
      <h1 className="header">Lista zadań</h1>
      <div className="tile">
        <div className="tile__headerContainer">
          <h2 className="tile__header">Dodaj nowe zadanie</h2>
        </div>
        <form className="form">
          <input type="text" placeholder="Co jest do zrobienia ?" className="form__input" autofocus />
          <button className="form__button">Dodaj zadanie</button>
        </form>
      </div>
      <div className="tile">
        <div className="tile__headerContainer">
          <h2 className="tile__header">Lista zadań</h2>
          <div className="tile__buttonsContainer"></div>
        </div>
        <ul className="tasksList"></ul>
      </div>
    </div>
  );
}

export default App;
