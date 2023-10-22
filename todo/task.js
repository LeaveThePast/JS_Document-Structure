const tasksInputElement = document.getElementById("task__input");
const tasksAddElement = document.getElementById("tasks__add");
const tasksElement = document.getElementById("tasks");

const taskListElement = document.createElement("div");
taskListElement.classList.add("tasks__list");
taskListElement.id = "tasks__list";
tasksElement.appendChild(taskListElement);

tasksAddElement.addEventListener("click", (event) => {
    event.preventDefault();

    const taskInputValue = tasksInputElement.value.trim();

    if (taskInputValue) {
        const newTaskElement = document.createElement("div");
        newTaskElement.classList.add("task");

        const newTaskTitle = document.createElement("div");
        newTaskTitle.classList.add("task__title");
        newTaskTitle.textContent = taskInputValue;
        newTaskElement.appendChild(newTaskTitle);

        const removeTaskButton = document.createElement("a");
        removeTaskButton.href = "#";
        removeTaskButton.classList.add("task__remove");
        removeTaskButton.textContent = "×";
        newTaskElement.appendChild(removeTaskButton);
        tasksElement.appendChild(newTaskElement);
        tasksInputElement.value = "";
    }
});


tasksElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("task__remove")) {
        const taskToRemove = event.target.closest(".task");
        tasksElement.removeChild(taskToRemove);
    }
});