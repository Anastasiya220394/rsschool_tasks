const addTask = document.querySelector(".add_task__textarea");
const todo = document.querySelector(".tasks__list");
const tabs = document.querySelectorAll(".tab");
const tabsParent = document.querySelector(".tabs");
const addTaskSection = document.querySelector(".area__tasks");

function loadTasks() {
  todo.innerHTML = localStorage.getItem("todos");
}

loadTasks();

// обновление local Storage
function updateLocalStorage() {
  localStorage.setItem("todos", todo.innerHTML);
}

// добавление новой задачи
function displayTasks() {
  if (addTask.value.trim().length !== 0) {
    const taskText = addTask.value.split("\n").join("<br>");

    let displayTask = "";

    displayTask += `
          <li>
            <span class="text-task">${taskText}</span>
            <p class="delete_btn" onclick= "deleteTask(this)">x</p>
          </li>
          `;
    todo.innerHTML += displayTask;
    updateLocalStorage();
  }
  addTask.value = "";
}

// добавление задач по "ентер"
function textAreaEnterClick(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    displayTasks();
    e.preventDefault(); // чтобы не создавать перенос строки
  }
}


// удаление элемента по нажатию на мусорку
function deleteTask(elem) {
  elem.parentNode.remove();
  console.log(elem.parentNode)
  console.log(elem)
  updateLocalStorage();
}

// зачеркивание текста по клику
function crossText(e) {
  if (e.target.classList.contains("text-task")) {
    e.target.classList.toggle("active");
  }
}

// функция табов
function tabClick(e) {
  const tab = e.target.closest(".tab");
  if (tab) {
    tabs.forEach(el => {
      el.classList.remove("tab--current");
    });
    tab.classList.add("tab--current");
    tab.parentNode.childNodes.forEach(tab => {
      tab.addEventListener("click", () => {
        addTaskSection.style.visibility = "visible";
        addTaskSection.style.height = "unset";
      });
    });
    if (tab.classList.contains("tab--all")) {
      for (let x = 0; x <= todo.children.length - 1; x++) {
        todo.children[x].style.display = "flex";
      }
    }
    if (tab.classList.contains("tab--active")) {
      for (let y = 0; y <= todo.children.length - 1; y++) {
        todo.children[y].style.display = "flex";
      }
        for (let x = 0; x <= todo.children.length - 1; x++) {
          if (
            todo.children[x].querySelector("span").classList.contains("active")
          ) {
            todo.children[x].style.display = "none";
          }
        }
    }
  }
  if (tab.classList.contains("tab--done")) {
    addTaskSection.style.visibility = "hidden";
    addTaskSection.style.height = "37px";
    for (let y = 0; y <= todo.children.length - 1; y++) {
      todo.children[y].style.display = "flex";
    }
    for (let x = 0; x <= todo.children.length - 1; x++) {
      if (
        todo.children[x].querySelector("span").classList.contains("active") ===
        false
      ) {
        todo.children[x].style.display = "none";
      }
    }
  }
}

// вызов функции ТАБов
tabsParent.addEventListener("click", e => tabClick(e));


// вызов функции добавления задач по "ентер"
addTask.addEventListener("keydown", e => textAreaEnterClick(e));