const initState = {
    todoList: [
        { id: 1, todo: 'Di choi' },
        { id: 2, todo: 'Tan gai' }
    ],
    searchTodoList: ''
}

const reducers = (state = initState, action) => {
    /*action
        {
            type: 'todoList/addTodo',
            payload: { id: 3, todo: 'Quay' }
        }
     */
    console.log('reducers', action)
    switch (action.type) {
        case 'todoList/addTodo':
            // xu ly gi day
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            };
        case 'todoList/deleteTodoById':
            // xu ly gi day
            return {
                ...state,
                todoList: state.todoList.filter((item, index) => item.id !== action.payload)
            };
        case 'todoList/searchInputTodoAction':
            // xu ly gi day
            return {
                ...state,
                searchTodoList: action.payload
            };
        default:
            return state;
    }
}
export default reducers;