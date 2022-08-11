import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
function Header() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { loggedin, token, user } = state;

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  return (
    <div>
      <div>Logoname</div>
      <div>
        <Link to="/">Home </Link>
        {!loggedin && <Link to="/Login">Login </Link>}
        {!loggedin && <Link to="/Signup">Signup </Link>}
        {loggedin && <Link to="/Dashboard">Dashboard</Link>}
        {loggedin && <a onClick={logout}>Logout ({user})</a>}
      </div>
    </div>
  );
}
export default Header;
