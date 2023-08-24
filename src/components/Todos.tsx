import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';

// React.FC '@types/react' 패키지에 정의된 내용(Functional Components)
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
