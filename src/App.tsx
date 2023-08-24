import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // state가 Todo 배열을 관리, 처음에는 빈배열 나중에 배열에 항목을 추가할 떄는 반드시 Todo 타입
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      // concat은 새로운 배열을 반환함.
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <div>
      {/* addTodoHandler 포인터를 newTodo에 전달해야함! */}
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
