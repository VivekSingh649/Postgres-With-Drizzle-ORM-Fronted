import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Link } from "react-router";

function UserById() {
  const breadcrumbs = [
    { label: "Dashboard", link: "/" },
    { label: "User Profile", link: null },
  ];

  const headerActions = (
    <div className="flex items-center space-x-3">
      <Link
        href="edit-user.html"
        className="flex items-center px-4 py-2 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
      >
        <i className="fas fa-pen mr-2 text-xs" />
        <span className="font-medium">Edit Profile</span>
      </Link>
      <button
        id="deleteUserBtn"
        className="flex items-center px-4 py-2 bg-white border border-slate-200 text-danger-500 rounded-xl hover:bg-danger-50 hover:border-danger-500 transition-all cursor-pointer"
      >
        <i className="fas fa-trash mr-2 text-xs" />
        <span className="font-medium">Delete User</span>
      </button>
    </div>
  );
  return (
    <>
      <AppLayout
        title="User Profile"
        breadcrumbs={breadcrumbs}
        actions={headerActions}
      >
        <section className="px-8 py-6">
          <div className="glass rounded-2xl shadow-glass-lg border border-white/20 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-primary-400 to-secondary-500">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20d%3D%22M0%2C192L48%2C176C96%2C160%2C192%2C128%2C288%2C138.7C384%2C149%2C480%2C203%2C576%2C224C672%2C245%2C768%2C235%2C864%2C202.7C960%2C171%2C1056%2C117%2C1152%2C117.3C1248%2C117%2C1344%2C171%2C1392%2C197.3L1440%2C224L1440%2C320L1392%2C320C1344%2C320%2C1248%2C320%2C1152%2C320C1056%2C320%2C960%2C320%2C864%2C320C768%2C320%2C672%2C320%2C576%2C320C480%2C320%2C384%2C320%2C288%2C320C192%2C320%2C96%2C320%2C48%2C320L0%2C320Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')]" />
            </div>
            <div className="px-8 pb-8 relative">
              <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 relative z-10">
                <div className="w-32 h-32 rounded-2xl bg-gradient flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white">
                  AS
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                  <h2 className="text-2xl font-bold">Aarav Sharma</h2>
                  <p className="text-slate-500">aarav.sharma@example.com</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success-50 text-success-500">
                      <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
                      Active
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      <i className="fas fa-map-marker-alt mr-1.5 text-slate-400" />
                      New Delhi, India
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      <i className="fas fa-clock mr-1.5 text-slate-400" />
                      Joined Aug 2023
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3">
                  <a
                    href="edit-user.html"
                    className="flex items-center justify-center px-4 py-2 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
                  >
                    <i className="fas fa-pen mr-2 text-xs" />
                    <span className="font-medium">Edit Profile</span>
                  </a>
                  <button
                    id="deleteUserBtn2"
                    className="flex items-center justify-center px-4 py-2 bg-white border border-slate-200 text-danger-500 rounded-xl hover:bg-danger-50 hover:border-danger-500 transition-all"
                  >
                    <i className="fas fa-trash mr-2 text-xs" />
                    <span className="font-medium">Delete User</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Personal Information */}
              <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden hover-lift">
                <div className="px-6 py-5 border-b border-slate-100">
                  <h3 className="font-semibold flex items-center">
                    <i className="fas fa-user text-primary-500 mr-2" />
                    Personal Information
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Full Name</p>
                      <p className="font-medium">Aarav Sharma</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Email</p>
                      <p className="font-medium">aarav.sharma@example.com</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Phone</p>
                      <p className="font-medium">+91-9876543210</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Age</p>
                      <p className="font-medium">28</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Gender</p>
                      <p className="font-medium">Male</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden hover-lift">
                <div className="px-6 py-5 border-b border-slate-100">
                  <h3 className="font-semibold flex items-center">
                    <i className="fas fa-map-marker-alt text-primary-500 mr-2" />
                    Address
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Street</p>
                      <p className="font-medium">123 Green Park</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">City</p>
                      <p className="font-medium">New Delhi</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">State</p>
                      <p className="font-medium">Delhi</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">ZIP Code</p>
                      <p className="font-medium">110016</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Country</p>
                      <p className="font-medium">India</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Account Information */}
              <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden hover-lift">
                <div className="px-6 py-5 border-b border-slate-100">
                  <h3 className="font-semibold flex items-center">
                    <i className="fas fa-clock text-primary-500 mr-2" />
                    Account Information
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">User ID</p>
                      <p className="font-medium">user_102938</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Created</p>
                      <p className="font-medium">August 15, 2023</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">
                        Last Updated
                      </p>
                      <p className="font-medium">April 20, 2024</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Last Login</p>
                      <p className="font-medium">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Education */}
              <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden hover-lift">
                <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-semibold flex items-center">
                    <i className="fas fa-graduation-cap text-primary-500 mr-2" />
                    Education
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="timeline-item">
                      <div className="timeline-marker" />
                      <div className="timeline-content">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-semibold">
                            M.Tech in Software Engineering
                          </h4>
                          <span className="text-sm text-slate-500">2019</span>
                        </div>
                        <p className="text-slate-600">IISc Bangalore</p>
                        <p className="text-sm text-slate-500 mt-1">
                          Graduated with distinction, specializing in AI and
                          Machine Learning
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker" />
                      <div className="timeline-content">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-semibold">
                            B.Tech in Computer Science
                          </h4>
                          <span className="text-sm text-slate-500">2017</span>
                        </div>
                        <p className="text-slate-600">IIT Delhi</p>
                        <p className="text-sm text-slate-500 mt-1">
                          First class honors, recipient of the Dean's Merit
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hobbies & Interests */}
              <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden hover-lift">
                <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-semibold flex items-center">
                    <i className="fas fa-heart text-primary-500 mr-2" />
                    Hobbies &amp; Interests
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-light text-primary-700">
                      <i className="fas fa-book mr-2 text-primary-500" />
                      Reading
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-light text-primary-700">
                      <i className="fas fa-bicycle mr-2 text-primary-500" />
                      Cycling
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-light text-primary-700">
                      <i className="fas fa-camera mr-2 text-primary-500" />
                      Photography
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-light text-primary-700">
                      <i className="fas fa-code mr-2 text-primary-500" />
                      Coding
                    </span>
                  </div>
                </div>
              </div>
              {/* Preferences */}
              <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden hover-lift">
                <div className="px-6 py-5 border-b border-slate-100">
                  <h3 className="font-semibold flex items-center">
                    <i className="fas fa-sliders text-primary-500 mr-2" />
                    Preferences
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Language</p>
                      <p className="font-medium">English</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Newsletter</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-50 text-danger-500">
                        <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-danger-500" />
                        Not Subscribed
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Dark Mode</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                        <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
                        Enabled
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">
                        Two-Factor Authentication
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                        <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
                        Enabled
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Profiles */}
              <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden hover-lift">
                <div className="px-6 py-5 border-b border-slate-100">
                  <h3 className="font-semibold flex items-center">
                    <i className="fas fa-share-alt text-primary-500 mr-2" />
                    Social Profiles
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://linkedin.com/in/aaravsharma"
                      target="_blank"
                      className="flex items-center px-4 py-2 rounded-xl bg-gradient-light text-slate-700 hover:bg-gradient hover:text-white transition-all"
                    >
                      <i className="fab fa-linkedin text-primary-500 mr-2" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/aaravdev"
                      target="_blank"
                      className="flex items-center px-4 py-2 rounded-xl bg-gradient-light text-slate-700 hover:bg-gradient hover:text-white transition-all"
                    >
                      <i className="fab fa-github text-primary-500 mr-2" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://twitter.com/aaravsharma"
                      target="_blank"
                      className="flex items-center px-4 py-2 rounded-xl bg-gradient-light text-slate-700 hover:bg-gradient hover:text-white transition-all"
                    >
                      <i className="fab fa-twitter text-primary-500 mr-2" />
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}

export default UserById;
