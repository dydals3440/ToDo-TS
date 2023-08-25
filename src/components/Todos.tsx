import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';
// React.FC '@types/react' 패키지에 정의된 내용(Functional Components)
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  console.log(todosCtx);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
