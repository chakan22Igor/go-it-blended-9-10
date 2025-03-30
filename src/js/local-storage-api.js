export const saveTasks = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
};
export const getTasks = (key) => {
    const tasks = localStorage.getItem(key);
    if (tasks) {
        return JSON.parse(tasks)
    }
    return []
}
