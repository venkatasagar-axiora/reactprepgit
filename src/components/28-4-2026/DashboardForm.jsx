// DashboardForm.jsx
import React, { useState } from "react";

const DashboardForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    department: "",
    status: "Active",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(formData);

    setFormData({
      fullName: "",
      email: "",
      role: "",
      department: "",
      status: "Active",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
        />

        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName}
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Role */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Role
        </label>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
        >
          <option value="">Select role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>

        {errors.role && (
          <p className="mt-1 text-sm text-red-500">
            {errors.role}
          </p>
        )}
      </div>

      {/* Department */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Department
        </label>

        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Enter department"
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Status
        </label>

        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="Active"
              checked={formData.status === "Active"}
              onChange={handleChange}
            />
            Active
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="Inactive"
              checked={formData.status === "Inactive"}
              onChange={handleChange}
            />
            Inactive
          </label>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Notes
        </label>

        <textarea
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Enter notes..."
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          className="rounded-xl border px-5 py-2.5"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-black px-5 py-2.5 text-white"
        >
          Save User
        </button>
      </div>
    </form>
  );
};

export default DashboardForm;