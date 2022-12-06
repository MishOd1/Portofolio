import React, { useState } from "react";
import "../Todo.css";

function Todo() {
  // state hook - to get the value of the input
  const [newItem, setNewItem] = useState(""); // this is to get the value of the thing being typed to plot in the input box it self while typing
  const [items, setItems] = useState([]); // this is to store the value after add button has been clicked

  // helper function
  function addItem() {
    if (!newItem) {
      alert("enter an item!"); // returns alert if you try to input blank
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const NewArray = items.filter((item) => item.id !== id); //this will delete single item
    setItems(NewArray);
  }

  function deleteAll(id) {
    const NewArray = items.filter((item) => item.id === id); //this will delete single item
    setItems(NewArray);
  }
  return (
    <div className="App" name="ToDo">
      <br></br>
      <br></br>
      
          <div className="mt-[20vh] ">
              <p className='text-4xl  font-bold inline border-b-4 border-pink-600 text-red-50 '>To-Do List</p>
              <p className='py-4 text-gray-300'>// This will help you orginize the day</p>
          </div>
      <div id="helloIsItMe">
      {/* 1.Header*/}
      {/* <h1 className="header">To-Do List App (React)</h1> */}
      <br></br>
      <br></br>
      {/*2. input*/}
      <div className="inputsContainer">
        <input
          type="text"
          maxLength={50}
          className="inputBox"
          placeholder="add an item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />{" "}
        <button
          className="add"
          onClick={() => {
            addItem();
          }}
        >
          {" "}
          {/* ADD ;addDate if it dosent Work minute 5*/}
          Add Task
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/*3. list of items  */}
      <ul className="Items-Main">
        {items.map((item, date) => {
          return (
            <div id="container">
              <li className="items-item" key={item.id}>
                {item.value}

                <button
                  id="DeleteMe"
                  title="done?"
                  className="Delete"
                  onClick={() => deleteItem(item.id)}
                >
                  <p className="delete">X</p>
                </button>
              </li>
            </div>
          ); // ploting task
        })}
      </ul>

      <button className="DeleteAll" onClick={() => deleteAll(items)}>
        Clear List
      </button>
      </div>
    </div>
  );
}

export default Todo;
