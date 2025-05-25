import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Link } from "react-router";
import Users from "./Users";
import { fetchAllUsers } from "../api/usersApi";
function Home() {
  const breadcrumbs = [{ label: "Dashboard", link: null }];

  console.log(fetchAllUsers);

  const headerActions = (
    <Link
      to="/create-user"
      className="flex items-center px-4 py-2 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
    >
      <i className="fas fa-plus mr-2 text-xs"></i>
      <span className="font-medium">Add User</span>
    </Link>
  );
  return (
    <AppLayout
      title="User Management"
      breadcrumbs={breadcrumbs}
      actions={headerActions}
    >
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-6 shadow-glass-sm hover-lift border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Users
                </p>
                <h3 className="text-3xl font-bold mt-1">1,284</h3>
                <p className="text-success-500 text-sm font-medium mt-2 flex items-center">
                  <i className="fas fa-arrow-up mr-1 text-xs" />
                  <span>12.5% from last month</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center text-white">
                <i className="fas fa-users" />
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 shadow-glass-sm hover-lift border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Active Users
                </p>
                <h3 className="text-3xl font-bold mt-1">1,073</h3>
                <p className="text-success-500 text-sm font-medium mt-2 flex items-center">
                  <i className="fas fa-arrow-up mr-1 text-xs" />
                  <span>8.2% from last month</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-success-500 flex items-center justify-center text-white">
                <i className="fas fa-user-check" />
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 shadow-glass-sm hover-lift border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Inactive Users
                </p>
                <h3 className="text-3xl font-bold mt-1">211</h3>
                <p className="text-danger-500 text-sm font-medium mt-2 flex items-center">
                  <i className="fas fa-arrow-up mr-1 text-xs" />
                  <span>3.1% from last month</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-danger-500 flex items-center justify-center text-white">
                <i className="fas fa-user-slash" />
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 shadow-glass-sm hover-lift border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">New Users</p>
                <h3 className="text-3xl font-bold mt-1">48</h3>
                <p className="text-success-500 text-sm font-medium mt-2 flex items-center">
                  <i className="fas fa-arrow-up mr-1 text-xs" />
                  <span>24.3% from last month</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary-500 flex items-center justify-center text-white">
                <i className="fas fa-user-plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Users />
    </AppLayout>
  );
}

export default Home;
