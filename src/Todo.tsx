import React, { Fragment, useState, useContext, useEffect } from "react";
import { LangContext } from "../../Context/LangContext";
import { UserContext } from "../../Context/Context";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
  
}

export default function Todo() {
  var contex = useContext(UserContext);
  var langcontex = useContext(LangContext);
  const { theme } = Object(contex);
  const { lang } = Object(langcontex);
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([
    { text: "Верстать сайт mnenado.kz", complete: false },
    { text: "Изучить Typescript", complete: false }
  ]);


  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

// useEffect(() => {
//   let todoList = JSON.parse(localStorage.getItem("value"));
//   if(todoList){
//     setTodos(todoList);

//   }
// }, [])

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };
  console.log(todos);

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    // switch complete state
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>{lang.todoTitle}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">{lang.buttonTodo}</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <Fragment key={index}>
              <div
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
              >
                {todo.text}
              </div>
              <button type="button" onClick={(): void => completeTodo(index)}>
                {todo.complete ? lang.inCompleteTodo : lang.completeTodo}
              </button>
              <button type="button" onClick={(): void => deleteTodo(index)}>
                &times;
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
}
