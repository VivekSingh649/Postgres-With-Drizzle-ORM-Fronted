import React, { useState } from "react";
import DeleteUserModal from "../modals/DeleteUserModal";
import { Link } from "react-router";

function UserTableRow({ user }) {
  const nameFirstLetter = user ? user.fullName?.charAt(0) : "!";

  return (
    <>
      <tr>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center text-white font-medium">
              {nameFirstLetter}
            </div>
            <div className="ml-3">
              <p className="font-medium">{user?.fullName}</p>
              <p className="text-xs text-slate-500">{user?.email}</p>
            </div>
          </div>
        </td>

        <td className="px-6 py-4">
          {user?.isActive ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
              Active
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-50 text-danger-500">
              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-danger-500" />
              Inactive
            </span>
          )}
        </td>

        <td className="px-6 py-4">
          <div className="flex items-center">
            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center mr-2">
              <i className="fas fa-map-marker-alt text-xs text-slate-500" />
            </span>
            <span>{`${user?.address?.city}, ${user?.address?.state}`}</span>
          </div>
        </td>

        <td className="px-6 py-4">
          <div className="flex items-center">
            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center mr-2">
              <i className="fas fa-clock text-xs text-slate-500" />
            </span>
            <span>{new Date(user?.createdAt).toLocaleDateString()}</span>
          </div>
        </td>

        <td className="px-6 py-4">
          <div className="flex items-center space-x-2">
            <Link
              to={`/profile/${user?.id}`}
              className="tooltip p-2 rounded-lg hover:bg-slate-100 text-slate-600"
              data-tooltip="View Profile"
            >
              <i className="fas fa-eye" />
            </Link>
            <Link
              to={`/update-user/${user?.id}`}
              className="tooltip p-2 rounded-lg hover:bg-slate-100 text-slate-600"
              data-tooltip="Edit User"
            >
              <i className="fas fa-pen" />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}

export default UserTableRow;
