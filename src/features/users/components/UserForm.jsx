// features/users/components/UserForm.jsx

import React from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { userSchema } from "../schemas/userSchema";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),

    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      age: 18,
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    reset();
  };

  return (
    <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        Create User
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Full Name */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            {...register("fullName")}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Role
          </label>

          <select
            {...register("role")}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          >
            <option value="">
              Select Role
            </option>

            <option value="Admin">
              Admin
            </option>

            <option value="Manager">
              Manager
            </option>

            <option value="Employee">
              Employee
            </option>
          </select>

          {errors.role && (
            <p className="mt-1 text-sm text-red-500">
              {errors.role.message}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Age
          </label>

          <input
            type="number"
            {...register("age", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />

          {errors.age && (
            <p className="mt-1 text-sm text-red-500">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            {...register("password")}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-black py-3 text-white"
        >
          {isSubmitting
            ? "Submitting..."
            : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;