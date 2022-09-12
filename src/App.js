import './App.css';
import Task from './components/Task'

function App() {
  return (
    <div className="App">
      <div className="content">

        <div className='controlls'>
          <h1>Minhas Tarefas Diárias</h1>
          <input type="text" placeholder="O que temos para hoje?"></input>
          <button>add</button>
        </div>

        <div className='tasks'>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
