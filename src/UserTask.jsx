import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import {useNavigate} from "react-router-dom";

const UserTask = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const [editId, setEditId] = useState(null);
  const [msg, setMsg] = useState("Response");

  const navigate = useNavigate();

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
        console.table(res.data);
      })
      .catch((err) => console.log(err));
  };

  // ADD TASK
  const addUserTask = (e) => {
    e.preventDefault();

    const info = {
      task: task,
      date: date,
    };

    axios
      .post("http://localhost:8080/add-task", info, {
        withCredentials: true,
      })
      .then((res) => {
        setMsg(res.data);
        getAllTask();
        setTask("");
        setDate("");
      })
      .catch((err) => setMsg(err.message));
  };

  // DELETE TASK
  const deleteUserTask = (id) => {
    axios
      .delete(`http://localhost:8080/delete-task/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMsg(res.data);
        getAllTask();
      })
      .catch((err) => setMsg(err.message));
  };

  // FILL FORM FOR UPDATE
  const editTask = (t) => {
    setTask(t.task);
    setDate(t.date);
    setEditId(t.id);
  };

  // UPDATE TASK
  const updateUserTask = (e) => {
    e.preventDefault();

    const info = {
      task: task,
      date: date,
    };

    axios
      .put(`http://localhost:8080/update-task/${editId}`, info, {
        withCredentials: true,
      })
      .then((res) => {
        setMsg(res.data);
        getAllTask();
        setTask("");
        setDate("");
        setEditId(null);
      })
      .catch((err) => setMsg(err.message));
  };

  // UPDATE STATUS
  const updateUserTaskStatus = (id) => {
    let msg = "Completed";

    axios
      .patch(
        `http://localhost:8080/update-status/${id}/${msg}`,
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        setMsg(res.data);

        // update local state
        // setTasks((prevTasks) =>
        //   prevTasks.map((t) => (t.id === id ? {...t, status: "Completed"} : t)),
        // );
        getAllTask();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mainDiv">
      {/* <h2 className="todo-title">📝 Todo List</h2> */}

      {msg !== "Response" && (
        <div className="popup">
          <p>{msg}</p>
          <button onClick={() => setMsg("Response")}>OK</button>
        </div>
      )}

      <form onSubmit={editId ? updateUserTask : addUserTask}>
        <input
          className="taskInput"
          type="text"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">{editId ? "Update Task" : "Add Task"}</button>
      </form>

      <hr />

      <div className="table-container">
        <table width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((t) => (
              <tr
                key={t.id}
                className={
                  t.status === "Completed" ? "completed" : "incomplete"
                }
              >
                <td>{t.id}</td>
                <td>{t.task}</td>
                <td>{new Date(t.date).toLocaleDateString()}</td>

                <td>
                  <button onClick={() => editTask(t)} className="update">
                    Update
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => deleteUserTask(t.id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => updateUserTaskStatus(t.id)}
                    className="update"
                  >
                    {t.status === "Completed" ? "Completed" : "Incomplete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTask;
