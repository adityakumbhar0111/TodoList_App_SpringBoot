import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("username", user);
    params.append("password", pass);

    axios
      .post("http://localhost:8080/login", params, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate("/tasks");
      })
      .catch(() => alert("Invalid Credentials"));
  };
  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
