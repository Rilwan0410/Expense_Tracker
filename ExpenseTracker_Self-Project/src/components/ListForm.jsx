import React from "react";
import { useForm } from "react-hook-form";


const ListForm = () => {
  const {register} = useForm()
  console.log(register())
  return (
    <form className="text-xl w-[35%] font-medium">
      <div className="form-group mb-3">
        <label htmlFor="description">Description</label>
        <input id="description" type="text" className="form-control" />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="price">Price</label>
        <input id="price" type="number" className="form-control" />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="category">Category</label>
        <select className="form-select" name="category" id="category">
        <option selected value></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary text-medium">Submit</button>
    </form>
  );
};

export default ListForm;
