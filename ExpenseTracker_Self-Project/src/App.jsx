import { useState } from "react";
import "./App.css";
import ListForm from "./components/ListForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" p-[20px]">
      <ListForm />
    </div>
  );
}

export default App;
