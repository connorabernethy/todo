import React, { useRef } from "react";
import { useState } from "react";
import NewTaskModal from "./NewTaskModal";
import Task from "./Task";
import { Input } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

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
    const [flag, setFlag] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        if (taskBody.length === 0 || !deadline || taskBody.length > 50) {
            setFlag(false);
        }
        else {
            let newTask = {description: taskBody, deadline: deadline}
            setTasks((task) => [
                ...tasks,
                newTask,
            ]);
            setFlag(true);
            setTaskBody("");
            setDeadline("");
        }
    }

    const removeTask = (index) => {
        if (index !== -1) {
            const firstArr = tasks.slice(0, index);
            const secondArr = tasks.slice(index + 1);
            setTasks([...firstArr, ...secondArr]);
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
                    ) : (tasks.map((task, index) =>
                        <Task remove={removeTask} taskID={index} description={task.description} deadline={task.deadline}/>))}
                </div>
                <NewTaskModal ref={(ref) => { this.child = ref; }}>
                    <div class="modal-form-container">
                        <form onSubmit={handleSubmit}>
                            <label for="task-input">TASK DESCRIPTION</label>
                            <input id="task-input" placeholder="CHARACTER LIMIT: 50" value={taskBody} onChange={event => setTaskBody(event.target.value)}></input>
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
                            <button type="submit" id="add-task">ADD TASK</button>
                            {flag && (
                                <p>Task successfully added!</p>
                            )}
                        </form>
                    </div>
                </NewTaskModal>
            </div>
        </div>
    )
}

export default MainContainer;