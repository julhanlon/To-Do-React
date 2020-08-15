import React from "react";
import { useTodoContext } from "../utils/GlobalState";


const TodoList = () => {
  const [state, dispatch] = useTodoContext();
  return (
    <div>
      <h4 className = "ml-4">The list: </h4>
      <ul className="list-group">
        {state.map((item, index) => (
          <li className="list-group-item" key={index}>
            <button onClick = {() => dispatch({type: "prioritize", index})} className="btn btn-light mr-4"> Prioritize</button>
            <button onClick = {() => dispatch({type: "completed", index})} className="btn btn-info mr-4">Completed</button>
            <button onClick = {() => dispatch({type: "remove", index})} className="btn btn-dark mr-4"> Delete</button>

            <span className={item.priority ? "font-weight-bold" : ""}>
              {item.completed ? <del> {item.name}</del> : item.name}{" "}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;