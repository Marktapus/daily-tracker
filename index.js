const addTaskBtn = document.getElementById('addTaskBtn');
const taskContainer = document.getElementById('taskContainer');

function addTask() {
    const taskElement = document.createElement('img');
    taskElement.src ='https://cdn-icons-png.freepik.com/512/4804/4804180.png';
    taskContainer.appendChild(taskElement);
}

addTaskBtn.addEventListener('click', addTask);