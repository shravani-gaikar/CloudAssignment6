function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleDone(this)">${taskText}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function toggleDone(task) {
    task.classList.toggle("done");
}