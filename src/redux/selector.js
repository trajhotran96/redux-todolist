export const getTodoList = (state) => {
    const todoList = state.todoList.filter((item, index) => {
        if (item.todo.includes(state.searchTodoList)) {
            return true
        }
    });
    return todoList;
}