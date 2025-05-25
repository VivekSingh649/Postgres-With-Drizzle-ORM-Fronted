import React from "react";
import { Link } from "react-router";
import Sidebar from "./Sidebar";
import { Menu, Users, BarChart2, Bell, Settings, UserPlus } from "lucide-react";

const AppLayout = ({ title, breadcrumbs, actions, children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-72 flex-1 min-h-screen">
        <header className="sticky top-0 z-10 glass shadow-glass-sm border-b border-white/20 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              {breadcrumbs && breadcrumbs.length > 0 && (
                <div className="flex items-center text-slate-500 text-sm">
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span className="mx-2">/</span>}
                      {crumb.link ? (
                        <Link
                          to={crumb.link}
                          className="hover:text-primary-500"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 w-64 text-sm"
                />
                <i className="fas fa-search absolute left-3.5 top-3 text-slate-400"></i>
              </div>

              <button className="relative p-2 rounded-xl hover:bg-white/60 transition-all">
                <Bell size={18} className="text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
              </button>

              {actions}
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};

export default AppLayout;
