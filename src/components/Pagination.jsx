import React, { useEffect, useState } from "react";

function Pagination({ length, limit, page, handlePage }) {
  const [disabled, setDisabled] = useState({
    prev: false,
    next: true,
  });
  const pageLengh = Math.ceil(length / limit);
  const start = (page - 1) * limit + 1;
  const end = Math.min(start + limit - 1, length);

  useEffect(() => {
    setDisabled({
      prev: page <= 1,
      next: page >= pageLengh,
    });
  }, [page, pageLengh, limit]);

  const handleNext = () => {
    if (!disabled.next) {
      handlePage(page + 1);
    }
  };
  const handlePrev = () => {
    if (!disabled.prev) {
      handlePage(page - 1);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];

    if (pageLengh <= 5) {
      for (let i = 1; i <= pageLengh; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", pageLengh);
      } else if (page >= pageLengh - 2) {
        pages.push(
          1,
          "...",
          pageLengh - 3,
          pageLengh - 2,
          pageLengh - 1,
          pageLengh
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", pageLengh);
      }
    }

    return pages;
  };

  return (
    <div className="p-6 border-t border-slate-100 flex items-center justify-between">
      <p className="text-sm text-slate-500">
        Showing <span className="font-medium">{start || 0}</span> to{" "}
        <span className="font-medium">{end}</span> of{" "}
        <span className="font-medium">{length}</span> users
      </p>
      <div className="flex items-center space-x-2">
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary-500 hover:text-primary-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          disabled={disabled.prev}
          onClick={handlePrev}
        >
          <i className="fas fa-chevron-left text-xs" />
        </button>
        {generatePageNumbers().map((pg, i) =>
          pg === "..." ? (
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-500">
              ...
            </button>
          ) : (
            <button
              key={pg}
              onClick={() => handlePage(pg)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer
                 ${
                   pg === page
                     ? "bg-gradient text-white font-medium"
                     : "border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-500"
                 }`}
            >
              {pg}
            </button>
          )
        )}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-primary-500 hover:text-primary-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          disabled={disabled.next}
          onClick={handleNext}
        >
          <i className="fas fa-chevron-right text-xs" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
