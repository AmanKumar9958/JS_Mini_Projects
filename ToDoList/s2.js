document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('addButton');
    const toDoList = document.getElementById('tasks-list');

    let allTasksList = JSON.parse(localStorage.getItem('tasks')) || [];

    allTasksList.forEach((task) => renderTask(task));

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if(taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        allTasksList.push(newTask);
        taskInput.value = "";
        saveTask();
        renderTask(newTask);
    });

    function saveTask(){
        localStorage.setItem("tasks", JSON.stringify(allTasksList));
    }

    function renderTask(task){
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', task.id);
        if(task.completed){
            listItem.classList.add('completed');
        }
        listItem.innerHTML = `
            <span>${task.text}</span>
            <button class="delete" aria-label="Delete task">
                <i class="fa-solid fa-trash" style="color: #000000;"></i>
            </button>
        `;

        listItem.addEventListener('click', (e) => {
            if(e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            listItem.classList.toggle('completed');
            saveTask();
        });

        listItem.querySelector(".delete").addEventListener('click', (e) => {
            e.stopPropagation();
            allTasksList = allTasksList.filter((eachTask) => eachTask.id !== task.id);
            listItem.remove();
            saveTask();
        })
        toDoList.appendChild(listItem);
    }
})