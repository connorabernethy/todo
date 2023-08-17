import React from "react";
import { useState } from "react";
import NewTaskModal from "./NewTaskModal";
import Task from "./Task";
import { Input } from '@chakra-ui/react'

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
    const [deadline, setDeadline] = useState();
    const [tasks, setTasks] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        if (taskBody.length === 0 || !deadline) {
            console.log("Error");
        }
        else {
            let newTask = {description: taskBody, deadline: deadline}
            setTasks((task) => [
                ...tasks,
                newTask,
            ]);
        }
        setTaskBody("");
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
                        <Task description={task.description} deadline={task.deadline}/>))}
                </div>
                <NewTaskModal>
                    <div class="modal-form-container">
                        <form onSubmit={handleSubmit}>
                            <label for="task-input">TASK DESCRIPTION</label>
                            <input id="task-input" value={taskBody} onChange={event => setTaskBody(event.target.value)}></input>
                            <br></br>
                            <label for="deadline-input">TASK DEADLINE</label>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                                id="deadline-input"
                                value={deadline}
                                onChange={event => setDeadline(event.target.value)}
                            />
                            <button type="submit">ADD TASK</button>
                        </form>
                    </div>
                </NewTaskModal>
            </div>
        </div>
    )
}

export default MainContainer;