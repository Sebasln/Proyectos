function addTask() {
    console.log(document.getElementById("taskName").value);

    const task = `<div class="task" id="task">
                <input type="text" value="${document.getElementById("taskName").value}" class="task-name" readonly>
                <button class="task-edit" onclick="editTask()">edit</button>
                <button class="task-delete" onclick="deleteTask()">delete</button>
            </div>`;

            console.log(document.getElementById("taskContainerId").innerHTML )
            document.getElementById("taskContainerId").innerHTML = document.getElementById("taskContainerId").innerHTML + task;

}


function editTask() {
    const editedTask = `<div class="task" id="editedTask">
    <input type="text" id="editText">
    <button class="task-done" onClick="edited()">done</button>
</div>`;

    document.getElementById("task").innerHTML = editedTask;
    console.log(document.getElementById("task").value);
}

function edited() {
    newTask = `<div class="task" id="task">
    <input type="text" value="${document.getElementById("editText").value}" class="task-name" readonly>
    <button class="task-edit" onclick="editTask()">edit</button>
    <button class="task-delete" onclick="deleteTask()">delete</button>
</div>`;

    document.getElementById("taskContainerId").innerHTML = newTask;
}
