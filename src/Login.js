import React, { useRef } from 'react';
function Login() {
  const r1 = useRef(); //email
  const r2 = useRef(); //password

  const hs = () => {
    // need a login service
    // can send email and password
    const data = {
      email: r1.current.value,
      password: r2.current.value,
    };

    // loginService
  };
  return (
    <div className="form">
      <h3>Login Form </h3>
      <input ref={r1} placeholder="email" />
      <input ref={r2} placeholder="password" />
      <button onClick={hs}>Login</button>
    </div>
  );
}
export default Login;
