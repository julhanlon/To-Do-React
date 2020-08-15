import React from "react";
import { useTodoContext } from "../utils/GlobalState";


const TodoList = () => {
  const [state, dispatch] = useTodoContext();
  return (
    <div>
      <h4>The list: </h4>
      <ul className="list-group">
        {state.map((item, index) => (
          <li className="list-group-item" key={index}>
            <button onClick = {() => dispatch({type: "prioritize", index})} className="btn btn-warning mr-4"> Prioritize</button>
            <button onClick = {() => dispatch({type: "remove", index})} className="btn btn-danger mr-4"> Delete</button>

        <span className={ item.priority ? "font-weight-bold" : ""}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;