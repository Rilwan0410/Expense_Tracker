import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "name must be at least 3 characters long" }),
  age: z.number().min(18),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });
  // console.log(form);

  //   const nameRef = useRef(null);
  //   const ageRef = useRef(null);
  //   const person = {
  //     name: "",
  //     age: 0,
  //   };

  return (
    <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3 w-1/4">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="form-control"
        />
        {errors.name ? (
          <p className="text-red-600">{errors.name.message}</p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-3 ">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control max-w-[80px]"
        />
        {errors.age ? <p className="text-red-600">{errors.age.message}</p> : ""}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
