import React, { useState } from "react";
import UserTableRow from "../components/user/UserTableRow";
import Pagination from "../components/Pagination";

function Users() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      role: "Developer",
      status: "active",
      location: "New Delhi, India",
      avatar: "AS",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      role: "Designer",
      status: "active",
      location: "Mumbai, India",
      avatar: "PP",
      lastLogin: "2 hours ago",
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul.verma@example.com",
      role: "Manager",
      status: "inactive",
      location: "Bangalore, India",
      avatar: "RV",
      lastLogin: "2 hours ago",
    },
    {
      id: 4,
      name: "Ananya Singh",
      email: "ananya.singh@example.com",
      role: "Product Owner",
      status: "active",
      location: "Hyderabad, India",
      avatar: "AS",
      lastLogin: "2 hours ago",
    },
    {
      id: 5,
      name: "Vikram Malhotra",
      email: "vikram.malhotra@example.com",
      role: "Developer",
      status: "inactive",
      location: "Chennai, India",
      avatar: "VM",
      lastLogin: "2 hours ago",
    },
  ];

  return (
    <>
      <div className="px-8 py-6">
        <div className="glass rounded-2xl shadow-glass-lg border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold">User List</h2>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                <i className="fas fa-filter" />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                <i className="fas fa-download" />
              </button>
              <div className="relative">
                <select className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 text-sm">
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                  <option>Today</option>
                  <option>All time</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-3 text-xs text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full custom-table">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-left">User</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Last Login</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserTableRow
                    key={user.id}
                    userAvatar={user.avatar}
                    userName={user.name}
                    userEmail={user.email}
                    userStatus={user.status}
                    userLocation={user.location}
                    userLastActive={user.lastLogin}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default Users;
