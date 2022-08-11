import React, { useState, useEffect, useRef } from 'react';
import { create, update, del, view } from './services';
import { useSelector } from 'react-redux';
function Dashboard() {
  const r1 = useRef(); //title
  const r2 = useRef(); //description
  const state = useSelector((s) => s);
  const { token } = state;
  const [a, seta] = useState([]);

  const loadMyTodos = () => {
    view(token).then((d) => {
      // console.log(d);
      if (d.status) {
        seta(d.data);
      } else {
        // tokn error
      }
    });
  };

  const _update = (id, status) => {};
  const _delete = (id) => {};
  const insert = () => {
    const data = {
      title: '',
      description: '',
    };
  };
  useEffect(loadMyTodos, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="form">
        <h3>create new todo </h3>
        <input placeholder="title" ref={r1} />
        <input placeholder="description" ref={r2} />
        <button onClick={insert}>insert</button>
      </div>
      <h3>My todos {a.length}</h3>

      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {a.map((x) => (
            <tr>
              <td>{x.title}</td>
              <td>{x.description}</td>
              <td>
                <button onClick={() => _update(x.id, !x.status)}>
                  {x.status ? 'completed' : 'pending'}
                </button>
                <button onClick={() => _delete(x.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard;
