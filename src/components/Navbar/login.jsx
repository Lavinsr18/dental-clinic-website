import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMsg(data.message || data.error);
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
  },
  input: {
    display: 'block',
    margin: '10px auto',
    padding: '10px',
    width: '100%',
  },
  button: {
    padding: '10px',
    width: '100%',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
  }
};

export default Login;
