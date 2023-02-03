import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import Todo from "./ToDoList";

const style = {
  bg: `mb-4`,
  container: `bg-blue-400 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-4xl font-bold text-center text-blue-1000 p-2 font-dancing-script`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: ` p-4 ml-2 bg-blue-900 text-gray-100`,
  count: `text-center p-2`,
};

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Create task
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      task: input,
      completed: false,
    });
    setInput("");
  };

  // Read task from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    // taking a snapshot of our db on firebase and reading it to us so that we can render it on the screen
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update task in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete a task
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Self Care Checklist</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="add task"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
