import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [tasks,setTasks] =
  useState (JSON.parse(localStorage.getItem('tasks')) || [] );
  const [input, setInput] = useState ('');

  //useEffect to save tasks to localStorage whenever tasks change 
  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

// Function to add a new task
function addTask() {
  if (input.trim() !== '') {
  setTasks([...tasks, input]);
  setInput('');
  }
  }

  // Function to remove a task
  function removeTask(index) {
  const newTasks = tasks.filter((task, i) => i !== index);
  setTasks(newTasks);
  }



  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}

        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
<li key={index}>
{task} <button onClick={() =>
removeTask(index)}>Remove</button>
</li>
      ))}
    </ul>
    </div>
    );
}
export default App;
