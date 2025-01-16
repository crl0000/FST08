// to invoke the function when the website is open add "()" if not just add the function name
// Step 1: Select DOM Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteOrCompleteToDo);
filterTodo.addEventListener("change", filterToDos);

function addToDo(event) {
  event.preventDefault();

  // Create the toDoDiv container
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");

  // Create a new todo list item
  const newToDo = document.createElement("li");
  newToDo.classList.add("todo-item");
  newToDo.textContent = todoInput.value;
  toDoDiv.appendChild(newToDo);

  // Create a complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
  toDoDiv.appendChild(completeBtn);

  // Create a trash button
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  toDoDiv.appendChild(trashBtn);

  todoList.appendChild(toDoDiv);

  todoInput.value = "";
}

function deleteOrCompleteToDo(event) {
  const targetBtn = event.target;

  if (targetBtn.classList.contains("trash-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }
  if (targetBtn.classList.contains("complete-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed");
  }
}

function filterToDos(event) {
  const filterValue = event.target.value;
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    if (filterValue === "all") {
      todo.style.display = "flex";
      console.log("Display all task");
    } else if (filterValue === "completed") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (filterValue === "uncompleted") {
      if (!todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
  });
}
