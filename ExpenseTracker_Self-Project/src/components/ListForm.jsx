import React from "react";
import { useForm } from "react-hook-form";
import { capitalize } from "../utils";

const ListForm = ({expenses, setExpenses, prevList, setPrevList}) => {


  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm();

  function onSubmit(data){
    data.description = capitalize(data.description)
    data.price = Number(data.price)
    data.category = capitalize(data.category)
    const updatedExpenses = [...expenses, {...data}]
    setExpenses(updatedExpenses)
    setPrevList(updatedExpenses)
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-xl w-[35%] font-medium"
    >
      <div className="form-group mb-3">
        <label htmlFor="description">Description</label>
        <input
          {...register("description", { required: true })}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p className="text-red-600 mt-[2px]">Description is required</p>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="price">Price</label>
        <input
          {...register("price", { min: 1, required: true })}
          id="price"
          type="number"
          className="form-control"
        />
        {errors.price?.type === "required" && (
          <p className="text-red-600 mt-[2px]">Price is required</p>
        )}
        {errors.price?.type === "min" && (
          <p className="text-red-600 mt-[2px]">Price cannot be less than $1</p>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="category">Category</label>
        <select
          {...register("category", { required: true })}
          className="form-select"
          name="category"
          id="category"
        >
          <option />
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category?.type === "required" && (
          <p className="text-red-600 mt-[2px]">Category cannot be empty</p>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary text-medium"
      >
        Submit
      </button>
    </form>
  );
};

export default ListForm;
