import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CreateAccount from "./CreateAccount";
// import { setQuaternionFromProperEuler } from "three/src/math/MathUtils";

function LogIn({ setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    //--------------FETCH--------------//
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("user data in login: ", user);
          setUser(user);
          setIsAuthenticated(true);
          history.push("/");
        });
      } else {
        res.json().then((json) => setError(json.error, error));
        alert("Incorrect name or password");
      }
    });
  }
  //--------------FETCH--------------//

  return (
    <div id="login-container">
      <form onSubmit={handleSubmit}>
        <h2 className="card-city-country">Log In</h2>
        <div className="input-login">
          <label>Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="input-login">
          <label>Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-btn" type="submit">
          LOG IN
        </button>
      </form>

      <NavLink to="/new">
        <h2>Create Account</h2>
      </NavLink>
    </div>
  );
}

export default LogIn;
