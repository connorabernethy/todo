import React from "react";
import { useState } from "react";
import NewTaskModal from "./NewTaskModal";

const MainContainer = (props) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ];

    const [taskBody, setTaskBody] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        if (taskBody.length === 0) {
            setTaskBody("Please input a valid message.")
        }
        else {
            setTasks((task) => [
                ...tasks,
                taskBody
            ]);
            setTaskBody("");
        }
    }

    return (
        <div className="main-container">
            <div className="todo-container">
                <header className="todo-header">
                    <h1>TODO LIST</h1>
                    <h2>{months[month]} {day}, {year}</h2>
                </header>
                <div class="content">
                    {tasks.length === 0 ? (
                        <div class="no-tasks">NO TASKS EXIST TODAY</div>
                    ) : (tasks.map(task =>
                        <li>{task}</li>))}
                    <NewTaskModal>
                        <div class="modal-form-container">
                            <form onSubmit={handleSubmit}>
                                <input id="task-input" value={taskBody} onChange={event => setTaskBody(event.target.value)}></input>
                                <button type="submit">ADD TASK</button>
                            </form>
                        </div>
                    </NewTaskModal>
                </div>
            </div>
        </div>
    )
}

export default MainContainer;