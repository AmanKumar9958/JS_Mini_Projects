document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('addButton');
    const toDoList = document.getElementById('tasks-list');
    const totalTaskSpan = document.getElementById('total-tasks');
    const completedTaskSpan = document.getElementById('completed-tasks');
    const remainingTaskSpan = document.getElementById('remaining-tasks');

    // getting all the stored items from the local storage..
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // initial task update..
    taskStatus()
    // render all the existing task on the page load..
    tasks.forEach((task) => renderTask(task));

    // adding task with click(mouse)..
    addButton.addEventListener('click', () =>{
        addTask();
    })

    // adding task with enter(keyboard)..
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            addTask();
        }
    })

    // function to add task..
    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText === "") return;    // if input is empty..

        const newTask = {   // adding new task with ID and status..
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);    // adding into the array..
        saveTask();             // saves the task into the local storage..
        renderTask(newTask);    // render NEW task on the screen..
        taskStatus();           // updating after adding tasks..
        taskInput.value = "";   // clearing the input field..
    }

    // function for saving task to local storage..
    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // function to render the task..
    function renderTask(task) {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', task.id);
        // marking the completed..
        if (task.completed) listItem.classList.add('completed');
        // creating new item..
        listItem.innerHTML = `
            <span>${task.text}</span>
            <button class="edit" aria-label="Edit task">
                <i class="fa-solid fa-pen" style="color: #000000;"></i>
            </button>
            <button class="delete" aria-label="Delete task">
                <i class="fa-solid fa-trash" style="color: #000000;"></i>
            </button>
        `;

        // Toggling the task completion..
        listItem.addEventListener('click', (e) => {
            if (e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            listItem.classList.toggle('completed');
            saveTask();
            taskStatus();
            deleteTask();
        });

        // editing the task..
        listItem.querySelector('.edit').addEventListener('click', (e) => {
            e.stopPropagation();
            const newText = prompt("Edit your task: ", task.text);
            if(newText && newText.trim()){
                task.text = newText.trim();
                listItem.querySelector('span').textContent = task.text;
                saveTask();
            }
        })

        // deleting the task..
        listItem.querySelector(".delete").addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter((eachTask) => eachTask.id !== task.id);    // removing from the array..
            listItem.remove();  // deleting from screen..
            saveTask();
            taskStatus();
        });

        toDoList.appendChild(listItem);
    }

    // function for task status..
    function taskStatus(){
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter((task) => task.completed).length;
        const remainingTasks = totalTasks - completedTasks;

        totalTaskSpan.textContent = totalTasks;
        completedTaskSpan.textContent = completedTasks;
        remainingTaskSpan.textContent = remainingTasks;
    }

    function deleteTask(event) {
        const taskElement = event.target.parentElement;
        taskElement.classList.add('deleting');
        setTimeout(() => taskElement.remove(), 500); // Wait for animation to complete
    }
    
});
