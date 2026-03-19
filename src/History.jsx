import {useEffect, useState} from "react";
import axios from "axios";
import "./History.css";

const GetHistroy = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    getAllTask();
  }, []);

  const getAllTask = () => {
    axios
      .get("http://localhost:8080/get-task", {
        withCredentials: true,
      })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  };

  // Dashboard counts
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "Completed").length;
  const pendingTasks = tasks.filter((t) => t.status !== "Completed").length;

  // Filter logic
  const filteredTasks = tasks
    .filter((t) => {
      if (filter === "Completed") return t.status === "Completed";
      if (filter === "Pending") return t.status !== "Completed";
      return true;
    })
    .filter((t) => {
      if (!searchDate) return true;
      return new Date(t.date).toLocaleDateString().includes(searchDate);
    });

  return (
    <div className="history-container">
      <h2 className="title">📊 Task Dashboard</h2>

      {/* DASHBOARD CARDS */}
      <div className="cards">
        <div className="card total">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="card completed">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="card pending">
          <h3>Pending</h3>
          <p>{pendingTasks}</p>
        </div>
      </div>

      {/* FILTER + SEARCH */}
      <div className="filter-section">
        <div className="buttons">
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Completed")}>Completed</button>
          <button onClick={() => setFilter("Pending")}>Pending</button>
        </div>

        <input
          type="text"
          placeholder="Search by date..."
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.task}</td>
                <td>{new Date(t.date).toLocaleDateString()}</td>
                <td className={t.status === "Completed" ? "done" : "todo"}>
                  {t.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetHistroy;
