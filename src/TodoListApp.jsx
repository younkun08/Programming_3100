import { useState } from 'react';
import './todolist.css'
// import Button from './components/Button.jsx'
// import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import TodoHeader from './components/TodoHeader.jsx'
// import Checkbox from './components/Checkbox.jsx'
import TodoAdder from './components/TodoAdder.jsx'
// import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
    constructor(text) {
        this.id = Date.now();       //할일 고유 id: 만든시각. new Date().getTime()
        this.text = text;           //할일 내용
        this.isCompleted = false;   //완료 여부: 기본값 false
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]); //할일 목록: 기본값 빈 리스트
    const addTodo = (text) => setTodos((todos) => [
        //이전 todos 복사하자
        ...todos,
        //newTodo 만들자
        //이전 todos에 추가하자
        new Todo(text)
    ]);
    // const addTodo = (text) => setTodos((todos) => [...todos, new Todo(text)]
    const toggleTodo = (id) => {
        setTodos(
            // todos에서 그 id에 해당하는 todo 찾고 그 todo의 isCompleted를 true -> false, false -> true
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        )
    }
    const deleteTodo = (id) => {
        //id가 같지 않은 todo만 복사하자(filter())
        setTodos(
            (todos) => todos.filter((todo) => todo.id !== id)
        )
    }
    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoListApp;