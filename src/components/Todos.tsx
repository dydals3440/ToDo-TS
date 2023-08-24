import React from 'react';
import Todo from '../models/todo';

// React.FC '@types/react' 패키지에 정의된 내용(Functional Components)
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
