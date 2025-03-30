export const createMarkup = (todos) => {
    return todos.map(({
    title, text    
    }, index) => `
    <li class="task-list-item" id="${title}-${index}">
    <button class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${text}</p>
    </li>`).join("")
}