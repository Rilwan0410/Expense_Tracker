import { useState } from "react";

export default function ListGroup({children, tag, func}) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function inputValue(e) {
    setInput(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    setItems([...items, input]);
    setInput("");
  }

  function highlightItem(e) {
    e.target.classList.toggle("active");
  }

  function deleteItem(e) {
    let modifiedList = items.filter((item) => item != e.target.innerText);
    setItems(modifiedList);
  }

  return (
    <form onSubmit={submitForm}>
      <div className="flex items-center justify-center">
        <h1 className="inline mr-[15px]">ListGroup</h1>
        <input
          type="text"
          value={input}
          onChange={inputValue}
          className="border-gray outline-none border-[2px] p-[5px] text-xl font-bold  border-solid"
        />
      </div>
      <ul className="list-group mt-[20px]">
        {tag.length ? (
          tag.map((each, index) => (
            <li
              className="list-group-item cursor-pointer hover:scale-110 origin-top-left transition-all"
              // onClick={deleteItem}
              onClick={highlightItem}
              onDoubleClick={() => func(each)}
              key={index}
            >
              {each}
            </li>
          ))
        ) : (
          <li className="list-group-item">Nothing To Display</li>
        )}
      </ul>
    </form>
  );
}
