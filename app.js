const textArea = document.querySelector("textarea"),
  addTodo = document.querySelector(".write"),
  listTodo = document.querySelector(".todos"),
  lengthEl = document.querySelector(".todo_length"),
  btnClear = document.querySelector(".btn_clear");

const tasksLength = () => {
  const tasks = document.querySelectorAll(".pending");
  lengthEl.innerText = tasks.length == 0 ? "no" : tasks.length;

  const todos = document.querySelectorAll(".todo");
  console.log(todos.length);
  if (todos.length > 0) {
    btnClear.style.pointerEvents = "auto";
    btnClear.style.cursor = "pointer";
    btnClear.style.opacity = 1;
    return;
  }

  btnClear.style.pointerEvents = "none";
  btnClear.style.cursor = "not-alowed";
  btnClear.style.opacity = 0.5;
};

textArea.addEventListener("keyup", (e) => {
  let inptValue = textArea.value.trim();
  if (e.key === "Enter" && inptValue) {
    let liEl = `<li class="todo pending" onclick="handlTasks(this)">
            <input type="checkbox" id="check">
            <label for="check">${inptValue}</label>
            <i class="fa-solid fa-trash-can delete" onclick="deletetodo(this.parentElement)"></i>
        </li>`;

    listTodo.insertAdjacentHTML("beforeend", liEl);
    textArea.value = "";
    tasksLength();
  }
});

const handlTasks = (e) => {
  const inputEl = e.querySelector("input");
  inputEl.checked = inputEl.checked ? false : true;
  e.classList.toggle("pending");
  tasksLength();
};

btnClear.addEventListener("click", () => {
  listTodo.innerHTML = "";
  tasksLength();
});

const deletetodo = (el) => {
  el.remove();
};
