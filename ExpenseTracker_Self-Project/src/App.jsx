import { useState } from "react";
import "./App.css";
import ListForm from "./components/ListForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='font-semibold text-[3rem] ml-[5px]'>Expense Tracker</h1>
      <div className=" mt-[30px] p-[20px] flex justify-between">
        <ListForm />
        <ExpenseTable />
      </div>
    </>
  );
}

export default App;
