import { useRef } from 'react';

const NewTodo = () => {
  // 사용자 입력 방식 (useState, useRef (한번에 모든 입력 가져오기))
  // input 요소의 타입은 HTMLInputElement, Btn은 HTMLButtonElement
  // ()안에 default value 설정 (시작 값은 null) 여기서 생성된 레퍼런스는 나중에 htmINput element랑 연결,
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // 마우스관련은, MouseEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // ?.인이유? ref에 아직 값이 설정안될 수 있기 때문이다. (string | undefined)
    // !. null이 될 수 있따는 것은 알지만, 이 시점에는 절대 null이 아니라고 알려준다. 100% 확신할때 사용해야함 (string)
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
