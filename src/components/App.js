import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <h1>Parent Component!</h1>
      <h1>{isLoggedIn ? "Welcome, You are Logged in!" : "Please Log In"}</h1>
      {/* Do not remove the main div */}
      <LoginForm isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
    </div>
  );
};

function LoginForm({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-form">
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
  );
}

export default App;
