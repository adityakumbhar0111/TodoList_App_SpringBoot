import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/current-user", {
        withCredentials: true,
      })
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          navigate("/login");
        }
      });
  }, [navigate]);

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:8080/logout",
        {},
        {
          withCredentials: true,
        },
      )
      .then(() => {
        navigate("/login");
      })
      .catch(() => console.log("Logout failed"));
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">👤 Profile</h2>

        <h3 className="profile-user">
          Welcome, <span>{currentUser}</span>
        </h3>

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
