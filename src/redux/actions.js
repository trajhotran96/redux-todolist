export const addTodoAction = (todo) => {
  return {
    type: 'todoList/addTodo',
    payload: { id: `${todo}1`, todo: todo }
  }
}


export const deleteTodoByIdAction = (id) => {
  return {
    type: 'todoList/deleteTodoById',
    payload: id
  }
}

export const searchInputTodoAction = (textSearch) => {
  return {
    type: 'todoList/searchInputTodoAction',
    payload: textSearch
  }
}