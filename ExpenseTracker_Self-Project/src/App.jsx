import { useState } from "react";
import "./App.css";
import ListForm from "./components/ListForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState([
    { description: "pizza", price: 5, category: "Groceries" },
    { description: "candy", price: 5, category: "Groceries" },
    { description: "netflix", price: 5, category: "Entertainment" },
    { description: "Hulu", price: 5, category: "Entertainment" },
    { description: "Car Insurance", price: 5, category: "Utilities" },
    { description: "lights", price: 5, category: "Utilities" },
  ]);
  const [categories, setCategories] = useState("");
  const [prevList, setPrevList] = useState([])

  return (
    <>
      <h1 className="font-semibold text-[3rem] ml-[5px]">Expense Tracker</h1>
      <div className=" mt-[30px] p-[20px] flex justify-between  overflow-hidden max-h-[90vh]">
        <ListForm
          expenses={expenses}
          setExpenses={setExpenses}
          categories={categories}
          setCategories={setCategories}
          
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          categories={categories}
          setCategories={setCategories}
          prevList = {prevList}
          setPrevList={setPrevList}
    
        />
      </div>
    </>
  );
}

export default App;
