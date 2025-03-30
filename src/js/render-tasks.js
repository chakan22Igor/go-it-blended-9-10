import { getTasks, saveTasks } from "./local-storage-api";
import { createMarkup } from "./markup-tasks";
import { refs } from "./refs";

let todos = getTasks("todos");
export const addToDo = (todo) => {
    todos.push(todo);
    renderTasks();
    saveTasks("todos", todos);
}
export const clearTaskList = () => {
    refs.tasklist.innerHTML = "";
}
export const renderTasks = () => {
    refs.tasklist.innerHTML = createMarkup(todos);
}
export const deleteTask = (title) => {
    todos = todos.filter(todo => todo.title !== title);
    renderTasks();
    saveTasks("todos", todos);
}