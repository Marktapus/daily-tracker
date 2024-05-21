const addTaskBtn = document.getElementById('addTaskBtn');
const taskContainer = document.getElementById('taskContainer');

function addTask() {

    const taskElement = document.createElement('img');
    taskElement.src ='img/toothbrush.png';
    taskContainer.appendChild(taskElement);
    let img = document.createElement(img)
    img.id = "taskImg";
}

addTaskBtn.addEventListener('click', addTask);