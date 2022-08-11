import React, { useState, useEffect } from 'react';
function Home() {
  const [a, seta] = useState([]);

  const loadAllTodos = () => {
    // need a service
    // getAllTodosOfAllUser
  };

  useEffect(loadAllTodos, []);

  // get all todos of all users
  return (
    <div>
      <h1>Home</h1>

      <h2>All todos {a.length} </h2>

      <ul>
        {a.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
