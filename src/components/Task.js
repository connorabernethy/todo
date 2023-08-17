import React from "react";

const Task = (props) => {
    const {description, deadline} = props;
    return(
        <div class="task-container">
            <p>{description}</p>
            <span>{deadline}</span>
        </div>
    )
}

export default Task;