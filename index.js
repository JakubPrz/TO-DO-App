let nextId = 1;

const getTaskNameAndDescription = function() {
    const taskName = document.querySelector("#task-name").value;
    const taskDescription = document.querySelector("#task-description").value;

    return { taskName, taskDescription };
};

const addTask = function() {
    const { taskName, taskDescription } = getTaskNameAndDescription();
    const listItem = document.createElement("li");
    listItem.classList = "list-group-item d-flex justify-content-between align-items-center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-control-checkbox";

    checkbox.addEventListener("change", () => {
        if(listItem.style.textDecoration === "line-through") {
            listItem.style.textDecoration = "none";
        } else {
            listItem.style.textDecoration = "line-through";
        }
    });

    const idSpan = document.createElement("span");
    idSpan.textContent = nextId;

    const taskNameSpan = document.createElement("span");
    taskNameSpan.textContent = taskName;

    const taskDescriptionSpan = document.createElement("span");
    taskDescriptionSpan.textContent = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList = "btn btn-danger";
    deleteButton.addEventListener("click", () => listItem.remove());

    listItem.append(
        checkbox,
        idSpan,
        taskNameSpan,
        taskDescriptionSpan,
        deleteButton
    );

    document.querySelector("#task-list").append(listItem)
    nextId++;
};

const addTaskButton = document.querySelector("#add-task-button");
addTaskButton.addEventListener("click", addTask);