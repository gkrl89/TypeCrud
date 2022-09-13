import React from "react";
import { useState, useEffect, useReducer } from "react";
import "./todo.css";
import { ITodo } from "./todointerface";

const AddTodo = () => {
  const [task, setTask] = useState<string>("");

  const [todolist, setTodoList] = useState<ITodo[]>([]);

  const [editmodal, setEditModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const AddTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const newTask = { taskName: task };
    setTodoList([...todolist, newTask]);

    setTask(" ");
  };

  const ClickComplete = (completetask: string): void => {
    setTodoList(
      todolist.filter((task) => {
        return task.taskName != completetask;
      })
    );
  };

  return (
    <>
      <div className="header">
        <h1> Todo APP </h1>
      </div>
      <div className="form">
        <h1>TODO</h1>
        <form>
          <input type="text" name="task" value={task} onChange={handleChange} />
          <button
            type="submit"
            onClick={(e) => {
              AddTodo(e);
            }}
          >
            Add
          </button>
        </form>
      </div>
      <div className="todolist">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todolist.map((task, key: number) => {
              return (
                <tr key={key}>
                  <td>{task.taskName}</td>
                  <td>
                    <button
                      onClick={() => {
                        ClickComplete(task.taskName);
                      }}
                    >
                      Completed
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AddTodo;
