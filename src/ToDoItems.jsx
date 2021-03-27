import React from "react";

const ToDoItem = (props) => {
  return (
    <React.Fragment>
      <div className="li-item">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li id={props.id} key={props.key}>
          {props.text}
        </li>
      </div>
    </React.Fragment>
  );
};

export default ToDoItem;
