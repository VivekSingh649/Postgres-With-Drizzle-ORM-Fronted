import React, { useState } from "react";
import DeleteUserModal from "../modals/DeleteUserModal";

function UserTableRow({
  userAvatar,
  userName,
  userEmail,
  userStatus,
  userLocation,
  userLastActive,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };
  return (
    <>
      <tr>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center text-white font-medium">
              {userAvatar}
            </div>
            <div className="ml-3">
              <p className="font-medium">{userName}</p>
              <p className="text-xs text-slate-500">{userEmail}</p>
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          {userStatus === "active" ? (
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
            <span>{userLocation}</span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center mr-2">
              <i className="fas fa-clock text-xs text-slate-500" />
            </span>
            <span>{userLastActive}</span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center space-x-2">
            <a
              href="user-profile.html"
              className="tooltip p-2 rounded-lg hover:bg-slate-100 text-slate-600"
              data-tooltip="View Profile"
            >
              <i className="fas fa-eye" />
            </a>
            <a
              href="edit-user.html"
              className="tooltip p-2 rounded-lg hover:bg-slate-100 text-slate-600"
              data-tooltip="Edit User"
            >
              <i className="fas fa-pen" />
            </a>
            <button
              className="tooltip p-2 rounded-lg hover:bg-slate-100 text-slate-600 cursor-pointer"
              data-tooltip="Delete User"
              onClick={() => handleDeleteClick({ name: userName })}
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </td>
      </tr>
      {isDeleteModalOpen && (
        <DeleteUserModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirm}
          userName={userToDelete ? userToDelete.name : null}
        />
      )}
    </>
  );
}

export default UserTableRow;
