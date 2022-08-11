import React, { useRef } from 'react';
function Signup() {
  const r1 = useRef(); //name
  const r2 = useRef(); //email
  const r3 = useRef(); //password

  const hs = () => {
    // need a signup service
    // signupService
    // name,email,password
    const data = {
      name: r1.current.value,
      email: r2.current.value,
      password: r3.current.value,
    };
  };

  return (
    <div className="form">
      <h3>Signup</h3>
      <input placeholder="name" />
      <input placeholder="email" />
      <input placeholder="password" />
      <button onClick={hs}>signup</button>
    </div>
  );
}
export default Signup;
