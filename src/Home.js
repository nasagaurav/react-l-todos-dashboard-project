import React, { useState, useEffect } from 'react';
import { getAllTodosOfAllUser } from './services';
function Home() {
  const [a, seta] = useState([]);

  const loadAllTodos = () => {
    // need a service
    getAllTodosOfAllUser().then((d) => seta(d));
  };

  useEffect(loadAllTodos, []);

  // get all todos of all users
  return (
    <div>
      <h1>Home</h1>

      <h2>All todos {a.length} </h2>

      <ul>
        {a.map((x) => (
          <li>{x.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
