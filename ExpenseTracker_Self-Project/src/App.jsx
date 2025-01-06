import { useState } from "react";
import "./App.css";
import ListForm from "./components/ListForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState("");
  const [prevList, setPrevList] = useState([...expenses]);

  return (
    <>
      <h1 className="font-semibold text-[3rem] ml-[5px]">Expense Tracker</h1>
      <div className=" mt-[30px] p-[20px] flex justify-between  overflow-hidden max-h-[90vh]">
        <ListForm
          expenses={expenses}
          setExpenses={setExpenses}
          categories={categories}
          setCategories={setCategories}
          prevList={prevList}
          setPrevList={setPrevList}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          categories={categories}
          setCategories={setCategories}
          prevList={prevList}
          setPrevList={setPrevList}
        />
      </div>
    </>
  );
}

export default App;
