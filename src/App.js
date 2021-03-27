
import React, { useState } from "react";
import ToDoItem from "./ToDoItems";
import "./App.css";

function ToDoList() {
  const [getItem, setItem] = useState("");
  const itemChanged = (event) => {
    setItem(event.target.value);
    console.log(event.target.value);
  };

  const [itemList, updateItemList] = useState([]);
  const addToList = () => {
    updateItemList((oldList) => {
      return [...oldList, getItem];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    updateItemList((oldList) => {
      return oldList.filter((element, index) => {
        return index != id;
      });
    });
  };

  return (
    <React.Fragment>
      <div id="ToDoApp">
        <div className="ToDoContent">
          <div className="heading">
            <h1>ToDo List</h1>
          </div>
          <div className="inputArea">
            <input
              type="text"
              placeholder="Add Item"
              value={getItem}
              onChange={itemChanged}
            />

            <input type="submit" value="+" onClick={addToList} />
          </div>
          <div className="ToDoList">
            <ol className="ToDoItems">
              {itemList.map((value, index) => {
                return (
                  <ToDoItem
                    className="to-do-item"
                    id={index}
                    key={index}
                    text={value}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ToDoList;
