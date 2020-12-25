// selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions

// Function

function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Creat Li
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Check mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check">';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Check trash Button
  const trash = document.createElement("button");
  trash.innerHTML = '<i class="fas fa-trash">';
  trash.classList.add("trash-btn");
  todoDiv.appendChild(trash);

  // Append to list
  todoList.appendChild(todoDiv);

  // Clear to do input value

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
