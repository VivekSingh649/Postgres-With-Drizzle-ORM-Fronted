import React from "react";
import { Link } from "react-router";

function Header({ title, breadcrumbs, actions }) {
  return (
    <header className="sticky top-0 z-10 glass shadow-glass-sm border-b border-white/20 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          {breadcrumbs && (
            <div className="flex items-center text-sm text-slate-500 mb-1">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <i className="fas fa-chevron-right text-xs mx-2"></i>
                  )}
                  {crumb.link ? (
                    <Link href={crumb.link} className="hover:text-primary-500">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700 font-medium">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>

        {actions && (
          <div className="flex items-center space-x-3">{actions}</div>
        )}
      </div>
    </header>
  );
}

export default Header;
