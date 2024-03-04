import React from "react";

function Login() {
  return (
    <div
      className="container-fluid justify-content-center"
      style={{ padding: "100px", maxWidth: "800px" }}
    >
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Login
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Signup
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Login;
