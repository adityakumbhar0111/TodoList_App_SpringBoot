import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./LogReg.css";

const Register = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/register",
        {user, pass},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        localStorage.setItem("reg_user", res.data);
        console.log(res.data);
        navigate("/login");
      })
      .catch(() => alert("Invalid Credentials"));
  };

  return (
    <div className="login">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
