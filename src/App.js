import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTodoList} from './redux/selector';
import {addTodoAction, deleteTodoByIdAction, searchInputTodoAction} from './redux/actions'

function App() {
  const todoList = useSelector(getTodoList);
  const [textInput, setTextInput] = useState('');
  const [textSearch, setTextSearch] = useState('');
  const dispatchRedux = useDispatch();
  const handleTextSearchChange = (e) => {
    dispatchRedux(searchInputTodoAction(e.target.value))
    setTextSearch(e.target.value)
  }
  const handleSearchTodo = () => {
    // dispatchRedux(searchInputTodoAction(textSearch))
  }
  const handleTextinputChange = (e) => {
    setTextInput(e.target.value)
  }
  const handleAddTodo = () => {
    dispatchRedux(addTodoAction(textInput))
    setTextInput('')
  }
  const handleDeleteTodo = (id) => {
    dispatchRedux(deleteTodoByIdAction(id))
  }
  return (
    <div className="App">
      <header className="App-header">
      <input type="text" name="search" onChange={handleTextSearchChange}/>
      <button onClick={handleSearchTodo}>
          Search
        </button>
        <input type="text" name="todo" onChange={handleTextinputChange}
        value={textInput}/>
        <button onClick={handleAddTodo}>
          Create Todo
        </button>
        <ul>
          {
            todoList.map((item) => {
              return (
                <div key={item.id}>
                  <span>* {item.todo} </span>
                  <button onClick={() => handleDeleteTodo(item.id)}>x</button>
                </div>
              )
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
