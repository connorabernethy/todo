import React from "react";

const Task = (props) => {
    const { description, deadline, remove, taskID } = props;
    return (
        <div class="task-container">
            <p>{description}</p>
            <div>
                <span>{deadline}</span>
                <button id="mark-done" style={{ marginLeft: 10, padding: 5, borderRadius: "10px" }} onClick={() => remove(taskID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" sketch="http://www.bohemiancoding.com/sketch/ns" width="20px" height="20px" viewBox="0 -3 32 32" version="1.1">

                        <title>checkmark</title>
                        <defs>

                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" type="MSPage">
                            <g id="Icon-Set" type="MSLayerGroup" transform="translate(-516.000000, -1037.000000)" fill="#000000">
                                <path d="M545.34,1042.62 C545.34,1042.62 528.282,1060.01 528.014,1060.29 C527.216,1061.1 525.924,1061.1 525.126,1060.29 C525.126,1060.29 518.588,1053.62 518.568,1053.6 C517.832,1052.78 517.852,1051.51 518.629,1050.71 C519.426,1049.9 520.719,1049.9 521.517,1050.71 L526.569,1055.87 L542.452,1039.67 C543.249,1038.86 544.542,1038.86 545.34,1039.67 C546.137,1040.48 546.137,1041.8 545.34,1042.62 L545.34,1042.62 Z M546.783,1038.2 C545.188,1036.57 542.603,1036.57 541.008,1038.2 L526.569,1052.92 L522.96,1049.24 C521.365,1047.62 518.779,1047.62 517.185,1049.24 C515.59,1050.87 515.59,1053.51 517.185,1055.13 L523.682,1061.76 C525.277,1063.39 527.862,1063.39 529.457,1061.76 L546.783,1044.09 C548.378,1042.46 548.378,1039.82 546.783,1038.2 L546.783,1038.2 Z" id="checkmark" type="MSShapeGroup">

                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Task;