import React from "react";
import { useRef } from "react";
import styles from './NewTodo.module.css'
const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = (
  props
) => {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
    todoTextRef.current!.value=''
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">TODO text:</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
