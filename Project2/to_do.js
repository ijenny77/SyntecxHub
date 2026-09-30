/* =========================
   ELEMENTS
========================= */

const taskForm =
    document.getElementById("taskForm");

const taskInput =
    document.getElementById("taskInput");

const categoryInput =
    document.getElementById("categoryInput");

const priorityInput =
    document.getElementById("priorityInput");

const dateInput =
    document.getElementById("dateInput");

const taskList =
    document.getElementById("taskList");

const emptyState =
    document.getElementById("emptyState");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");

const remainingText =
    document.getElementById("remainingText");

const progressPercent =
    document.getElementById("progressPercent");

const taskCount =
    document.getElementById("taskCount");

const clearCompleted =
    document.getElementById("clearCompleted");

const greeting =
    document.getElementById("greeting");

const currentDate =
    document.getElementById("currentDate");

const sortSelect =
    document.getElementById("sortSelect");

const filters =
    document.querySelectorAll(".filter");

const allCount =
    document.getElementById("allCount");

const activeCount =
    document.getElementById("activeCount");

const completedCount =
    document.getElementById("completedCount");


/* =========================
   EDIT MODAL ELEMENTS
========================= */

const editModal =
    document.getElementById("editModal");

const editTaskInput =
    document.getElementById("editTaskInput");

const editCategory =
    document.getElementById("editCategory");

const editPriority =
    document.getElementById("editPriority");

const editDate =
    document.getElementById("editDate");

const closeModal =
    document.getElementById("closeModal");

const cancelEdit =
    document.getElementById("cancelEdit");

const saveEdit =
    document.getElementById("saveEdit");


/* =========================
   STORAGE
========================= */

const STORAGE_KEY =
    "to-do-tasks";


/* =========================
   VARIABLES
========================= */

let tasks = [];

let currentFilter = "all";

let editingTaskId = null;


/* =========================
   LOAD TASKS
========================= */

function loadTasks() {

    const savedTasks =
        localStorage.getItem(STORAGE_KEY);


    if (savedTasks) {

        try {

            tasks =
                JSON.parse(savedTasks);

        } catch (error) {

            tasks = [];
        }

    } else {

        tasks = [];
    }
}


/* =========================
   SAVE TASKS
========================= */

function saveTasks() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );
}


/* =========================
   GREETING
========================= */

function setGreeting() {

    const hour =
        new Date().getHours();


    if (hour < 12) {

        greeting.textContent =
            "Good morning";

    } else if (hour < 18) {

        greeting.textContent =
            "Good afternoon";

    } else {

        greeting.textContent =
            "Good evening";
    }
}


/* =========================
   DATE
========================= */

function setDate() {

    const today =
        new Date();


    currentDate.textContent =
        today.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );
}


/* =========================
   ADD TASK
========================= */

taskForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const text =
            taskInput.value.trim();


        if (text === "") {

            return;
        }


        const newTask = {

            id: Date.now(),

            text: text,

            category:
                categoryInput.value,

            priority:
                priorityInput.value,

            dueDate:
                dateInput.value,

            completed: false
        };


        tasks.unshift(newTask);


        saveTasks();

        renderTasks();


        taskForm.reset();


        priorityInput.value =
            "medium";


        taskInput.focus();

    }
);


/* =========================
   FILTER
========================= */

function getFilteredTasks() {

    let filteredTasks;


    if (currentFilter === "active") {

        filteredTasks =
            tasks.filter(
                task => !task.completed
            );

    } else if (
        currentFilter === "completed"
    ) {

        filteredTasks =
            tasks.filter(
                task => task.completed
            );

    } else {

        filteredTasks =
            [...tasks];
    }


    return sortTasks(filteredTasks);
}


/* =========================
   SORT
========================= */

function sortTasks(taskArray) {

    const sorted =
        [...taskArray];


    if (sortSelect.value === "newest") {

        sorted.sort(
            (a, b) => b.id - a.id
        );
    }


    if (sortSelect.value === "oldest") {

        sorted.sort(
            (a, b) => a.id - b.id
        );
    }


    if (sortSelect.value === "priority") {

        const priorityOrder = {

            high: 1,

            medium: 2,

            low: 3
        };


        sorted.sort(
            (a, b) =>
                priorityOrder[a.priority]
                -
                priorityOrder[b.priority]
        );
    }


    return sorted;
}


/* =========================
   RENDER
========================= */

function renderTasks() {

    taskList.innerHTML = "";


    const filteredTasks =
        getFilteredTasks();


    if (filteredTasks.length === 0) {

        emptyState.style.display =
            "block";

    } else {

        emptyState.style.display =
            "none";
    }


    filteredTasks.forEach(
        function (task) {

            createTaskElement(task);

        }
    );


    updateProgress();

    updateCounts();
}


/* =========================
   CREATE TASK
========================= */

function createTaskElement(task) {

    const li =
        document.createElement("li");


    li.className =
        "task";


    if (task.completed) {

        li.classList.add(
            "completed"
        );
    }


    /* CHECK BUTTON */

    const checkButton =
        document.createElement("button");


    checkButton.className =
        "check-btn";


    checkButton.innerHTML =
        task.completed
            ? "✓"
            : "";


    checkButton.addEventListener(
        "click",
        function () {

            toggleTask(task.id);

        }
    );


    /* CONTENT */

    const content =
        document.createElement("div");


    content.className =
        "task-content";


    /* TITLE */

    const title =
        document.createElement("div");


    title.className =
        "task-title";


    title.textContent =
        task.text;


    /* META */

    const meta =
        document.createElement("div");


    meta.className =
        "task-meta";


    /* CATEGORY */

    const category =
        document.createElement("span");


    category.className =
        "badge";


    category.textContent =
        task.category;


    meta.appendChild(category);


    /* PRIORITY */

    const priority =
        document.createElement("span");


    priority.className =
        `badge priority-${task.priority}`;


    priority.textContent =
        capitalize(
            task.priority
        );


    meta.appendChild(priority);


    /* DATE */

    if (task.dueDate) {

        const date =
            document.createElement("span");


        date.className =
            "badge";


        date.textContent =
            formatDate(
                task.dueDate
            );


        if (
            isOverdue(
                task.dueDate
            )
            &&
            !task.completed
        ) {

            date.classList.add(
                "overdue"
            );

            date.textContent +=
                " · Overdue";
        }


        meta.appendChild(date);
    }


    content.appendChild(title);

    content.appendChild(meta);


    /* ACTIONS */

    const actions =
        document.createElement("div");


    actions.className =
        "task-actions";


    /* EDIT BUTTON */

    const editButton =
        document.createElement("button");


    editButton.className =
        "action-btn";


    editButton.textContent =
        "✎";


    editButton.title =
        "Edit task";


    editButton.addEventListener(
        "click",
        function () {

            openEditModal(
                task.id
            );

        }
    );


    /* DELETE BUTTON */

    const deleteButton =
        document.createElement("button");


    deleteButton.className =
        "action-btn";


    deleteButton.textContent =
        "⌫";


    deleteButton.title =
        "Delete task";


    deleteButton.addEventListener(
        "click",
        function () {

            deleteTask(
                task.id
            );

        }
    );


    actions.appendChild(
        editButton
    );

    actions.appendChild(
        deleteButton
    );


    /* FINAL TASK */

    li.appendChild(
        checkButton
    );

    li.appendChild(
        content
    );

    li.appendChild(
        actions
    );


    taskList.appendChild(li);
}


/* =========================
   TOGGLE TASK
========================= */

function toggleTask(id) {

    const task =
        tasks.find(
            task => task.id === id
        );


    if (!task) {

        return;
    }


    task.completed =
        !task.completed;


    saveTasks();

    renderTasks();
}


/* =========================
   DELETE TASK
========================= */

function deleteTask(id) {

    tasks =
        tasks.filter(
            task => task.id !== id
        );


    saveTasks();

    renderTasks();
}


/* =========================
   OPEN EDIT MODAL
========================= */

function openEditModal(id) {

    const task =
        tasks.find(
            task => task.id === id
        );


    if (!task) {

        return;
    }


    /* Remember which task we're editing */

    editingTaskId =
        id;


    /* Put current values inside modal */

    editTaskInput.value =
        task.text;


    editCategory.value =
        task.category;


    editPriority.value =
        task.priority;


    editDate.value =
        task.dueDate || "";


    /* Show modal */

    editModal.classList.add(
        "show"
    );


    /* Focus input */

    setTimeout(
        function () {

            editTaskInput.focus();

            editTaskInput.select();

        },
        100
    );
}


/* =========================
   CLOSE EDIT MODAL
========================= */

function closeEditModal() {

    editModal.classList.remove(
        "show"
    );


    editingTaskId =
        null;
}


/* =========================
   SAVE EDIT
========================= */

saveEdit.addEventListener(
    "click",
    function () {

        if (editingTaskId === null) {

            return;
        }


        const newText =
            editTaskInput.value.trim();


        if (newText === "") {

            editTaskInput.focus();

            return;
        }


        const task =
            tasks.find(
                task =>
                    task.id ===
                    editingTaskId
            );


        if (!task) {

            return;
        }


        /* Update task */

        task.text =
            newText;


        task.category =
            editCategory.value;


        task.priority =
            editPriority.value;


        task.dueDate =
            editDate.value;


        /* Save */

        saveTasks();


        /* Update screen */

        renderTasks();


        /* Close modal */

        closeEditModal();

    }
);


/* =========================
   CANCEL EDIT
========================= */

cancelEdit.addEventListener(
    "click",
    closeEditModal
);


closeModal.addEventListener(
    "click",
    closeEditModal
);


/* =========================
   CLICK OUTSIDE MODAL
========================= */

editModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            editModal
        ) {

            closeEditModal();

        }

    }
);


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
            &&
            editModal.classList.contains(
                "show"
            )
        ) {

            closeEditModal();

        }

    }
);


/* =========================
   CLEAR COMPLETED
========================= */

clearCompleted.addEventListener(
    "click",
    function () {

        tasks =
            tasks.filter(
                task =>
                    !task.completed
            );


        saveTasks();

        renderTasks();
    }
);


/* =========================
   FILTER BUTTONS
========================= */

filters.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filters.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                this.classList.add(
                    "active"
                );


                currentFilter =
                    this.dataset.filter;


                renderTasks();

            }
        );

    }
);


/* =========================
   SORT
========================= */

sortSelect.addEventListener(
    "change",
    function () {

        renderTasks();

    }
);


/* =========================
   PROGRESS
========================= */

function updateProgress() {

    const total =
        tasks.length;


    const completed =
        tasks.filter(
            task =>
                task.completed
        ).length;


    const remaining =
        total - completed;


    let percentage = 0;


    if (total > 0) {

        percentage =
            Math.round(
                (completed / total)
                * 100
            );
    }


    progressText.textContent =
        `${completed} of ${total} completed`;


    remainingText.textContent =
        `${remaining} remaining`;


    progressPercent.textContent =
        `${percentage}%`;


    progressFill.style.width =
        `${percentage}%`;


    taskCount.textContent =
        `${total} ${
            total === 1
                ? "task"
                : "tasks"
        }`;
}


/* =========================
   COUNTS
========================= */

function updateCounts() {

    const completed =
        tasks.filter(
            task =>
                task.completed
        ).length;


    const active =
        tasks.length -
        completed;


    allCount.textContent =
        `(${tasks.length})`;


    activeCount.textContent =
        `(${active})`;


    completedCount.textContent =
        `(${completed})`;
}


/* =========================
   FORMAT DATE
========================= */

function formatDate(dateString) {

    const date =
        new Date(
            dateString +
            "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );
}


/* =========================
   OVERDUE
========================= */

function isOverdue(dateString) {

    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    const dueDate =
        new Date(
            dateString +
            "T00:00:00"
        );


    return dueDate < today;
}


/* =========================
   CAPITALIZE
========================= */

function capitalize(text) {

    return (
        text.charAt(0).toUpperCase()
        +
        text.slice(1)
    );
}


/* =========================
   START APP
========================= */

setGreeting();

setDate();

loadTasks();

renderTasks();

taskInput.focus();