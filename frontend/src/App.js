import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const API = "http://localhost:5000/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!text.trim()) return;
    await axios.post(API, { text });
    setText("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Task Manager</h1>

        <div className="input-box">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your task..."
          />
          <button onClick={addTask}>+ Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t.id}>
              <span>{t.text}</span>
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;