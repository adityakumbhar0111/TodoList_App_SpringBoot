import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import UserTask from "./UserTask";
import GetHistroy from "./History";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/tasks" element={<UserTask />} />
        <Route path="/history" element={<GetHistroy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
