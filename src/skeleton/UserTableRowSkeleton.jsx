import React from "react";

function UserTableRowSkeleton() {
  return (
    <tr className="animate-pulse">
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-slate-400/70" />
          <div className="ml-3">
            <div className="h-4 w-24 bg-slate-500/60 rounded mb-2" />
            <div className="h-3 w-32 bg-slate-600/50 rounded" />
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="h-5 w-20 bg-slate-600/60 rounded-full" />
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <span className="w-5 h-5 rounded-full bg-slate-500/60 mr-2" />
          <div className="h-4 w-20 bg-slate-700/50 rounded" />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <span className="w-5 h-5 rounded-full bg-slate-500/60 mr-2" />
          <div className="h-4 w-16 bg-slate-700/60 rounded" />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-slate-600/60" />
          <div className="w-8 h-8 rounded-lg bg-slate-700/60" />
        </div>
      </td>
    </tr>
  );
}

export default UserTableRowSkeleton;
