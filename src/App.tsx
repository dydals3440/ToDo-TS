import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('learn TS')];
  const addTodoHandler = (todoText: string) => {};
  return (
    <div>
      {/* addTodoHandler 포인터를 newTodo에 전달해야함! */}
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
