import { useState } from 'react';
import TaskList from './Components/TaskList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  // getter ( todoList ) -> Récupérer le contenu du state
  // setter ( setTodoList(donnée) ) -> Mettre à jour le state

  const addTask = (event) => {
    event.preventDefault();

    // Définition du state = [... anciennes données, nouvelles données]
    setTodoList([...todoList, task])
    // vider l'input a chaque ajout.
    setTask("");
  }
  return (
    <div className= "App">
      <h1 className='title'>Bienvenue sur la TodoApp</h1>
      <form className='form' onSubmit={(event) => addTask(event)}>
        <input className='input' value={task} onChange={(event) => setTask(event.currentTarget.value)} type="text" placeholder='New task' />
        <button className='button' type="submit">Add Task</button>
      </form>

      <TaskList TaskList={todoList}/>
    </div>
  );
}

export default App;
