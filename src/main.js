/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
import { refs } from "./js/refs";
import { addToDo, clearTaskList, deleteTask, renderTasks } from "./js/render-tasks";

renderTasks();
refs.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputTitles = event.target.elements.taskName.value.trim();
  const inputText = event.target.elements.taskDescription.value.trim();
  if (inputTitles === "" || inputText === "") {
    alert('Fill all fields');
    return
  };
  const todo = {
    title: inputTitles,
    text: inputText,
  }
  addToDo(todo);
  refs.form.reset();
});
refs.tasklist.addEventListener('click', event => {
  if (!event.target.classList.contains('task-list-item-btn')) {
    return
  }
  const title = event.target.nextElementSibling.textContent;
  deleteTask(title)
});