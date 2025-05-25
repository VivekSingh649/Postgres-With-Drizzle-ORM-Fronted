import React from "react";

function Pagination() {
  return (
    <div className="p-6 border-t border-slate-100 flex items-center justify-between">
      <p className="text-sm text-slate-500">
        Showing <span className="font-medium">1</span> to{" "}
        <span className="font-medium">5</span> of{" "}
        <span className="font-medium">42</span> users
      </p>
      <div className="flex items-center space-x-2">
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary-500 hover:text-primary-500 disabled:opacity-50 disabled:pointer-events-none"
          disabled=""
        >
          <i className="fas fa-chevron-left text-xs" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient text-white font-medium">
          1
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-500">
          2
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-500">
          3
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-500">
          ...
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-500">
          9
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary-500 hover:text-primary-500">
          <i className="fas fa-chevron-right text-xs" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
