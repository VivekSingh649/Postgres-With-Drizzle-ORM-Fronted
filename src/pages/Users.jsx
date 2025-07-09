import React, { useEffect, useState } from "react";
import UserTableRow from "../components/user/UserTableRow";
import Pagination from "../components/Pagination";
import { useUsers } from "../hooks/useUsers";
import UserTableRowSkeleton from "../skeleton/UserTableRowSkeleton";
import ErrorMessage from "../components/user/ErrorMessage";
import { User2, Users2 } from "lucide-react";

function Users() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { isLoading, isError, data, error } = useUsers({ page, limit });

  const handlePageChange = (page) => {
    if (page < 1) return;
    setPage(page);
  };

  if (isError) {
    return isError && <ErrorMessage message={error?.message} />;
  }

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
                  <th className="px-6 py-4 text-left">Create At</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  Array.from({ length: limit }).map((_, index) => (
                    <UserTableRowSkeleton key={index} />
                  ))
                ) : data?.data?.length > 0 ? (
                  data?.data?.map((user) => (
                    <UserTableRow user={user} key={user.id} />
                  ))
                ) : (
                  <ErrorMessage message={data?.message} type="message" />
                )}
              </tbody>
            </table>
          </div>
          <Pagination
            length={data?.total || 0}
            limit={data?.limit || 5}
            page={data?.page || 1}
            handlePage={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default Users;
