// Dashboard.jsx
import React, { useState } from "react";
import DashboardModal from "./DashboardModal";
import DashboardForm from "./DashboardForm";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const [users, setUsers] = useState([]);

  const handleAddUser = (data) => {
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...data,
      },
    ]);

    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Manage users and forms
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="rounded-xl bg-black px-5 py-3 text-white"
        >
          + Add User
        </button>
      </div>

      {/* Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow">
          <h3 className="text-gray-500">Total Users</h3>

          <p className="mt-2 text-3xl font-bold">
            {users.length}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow">
          <h3 className="text-gray-500">Active Users</h3>

          <p className="mt-2 text-3xl font-bold">
            {
              users.filter((u) => u.status === "Active")
                .length
            }
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow">
          <h3 className="text-gray-500">Inactive Users</h3>

          <p className="mt-2 text-3xl font-bold">
            {
              users.filter((u) => u.status === "Inactive")
                .length
            }
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-left">Name</th>
              <th className="px-5 py-4 text-left">Email</th>
              <th className="px-5 py-4 text-left">Role</th>
              <th className="px-5 py-4 text-left">Department</th>
              <th className="px-5 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="py-10 text-center text-gray-400"
                >
                  No users added
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t"
                >
                  <td className="px-5 py-4">
                    {user.fullName}
                  </td>

                  <td className="px-5 py-4">
                    {user.email}
                  </td>

                  <td className="px-5 py-4">
                    {user.role}
                  </td>

                  <td className="px-5 py-4">
                    {user.department}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <DashboardModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Add New User"
      >
        <DashboardForm onSubmit={handleAddUser} />
      </DashboardModal>
    </div>
  );
};

export default Dashboard;