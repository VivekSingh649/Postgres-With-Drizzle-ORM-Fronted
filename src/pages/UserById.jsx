import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Link, useParams } from "react-router";
import { useDeleteUser, useSingleUser } from "../hooks/useUsers";
import { firstLastChar, formatDate } from "../helper/helper";
import DeleteUserModal from "../components/modals/DeleteUserModal";
import Loader from "../components/user/Loader";
import ErrorMessage from "../components/user/ErrorMessage";

function UserById() {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useSingleUser(id);
  const user = data ? data.data : [];
  const [isOpen, setIsOpen] = useState(false);
  const deleteMutation = useDeleteUser();

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  const breadcrumbs = [
    { label: "Dashboard", link: "/" },
    { label: user?.fullName ? user?.fullName : "User", link: null },
  ];

  const handleDeleteConfirm = async () => {
    await deleteMutation.mutateAsync(id);
  };

  const headerActions = (
    <div className="flex items-center space-x-3">
      <Link
        to={`/update-user/${user?.id}`}
        className="flex items-center px-4 py-2 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
      >
        <i className="fas fa-pen mr-2 text-xs" />
        <span className="font-medium">Edit Profile</span>
      </Link>
      <button
        id="deleteUserBtn"
        className="flex items-center px-4 py-2 bg-white border border-slate-200 text-danger-500 rounded-xl hover:bg-danger-50 hover:border-danger-500 transition-all cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-trash mr-2 text-xs" />
        <span className="font-medium">Delete User</span>
      </button>
    </div>
  );
  return (
    <>
      <AppLayout
        title={user?.fullName}
        breadcrumbs={breadcrumbs}
        actions={headerActions}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <section className="px-8 py-6">
              <div className="glass rounded-2xl shadow-glass-lg border border-white/20 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-r from-primary-400 to-secondary-500">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20d%3D%22M0%2C192L48%2C176C96%2C160%2C192%2C128%2C288%2C138.7C384%2C149%2C480%2C203%2C576%2C224C672%2C245%2C768%2C235%2C864%2C202.7C960%2C171%2C1056%2C117%2C1152%2C117.3C1248%2C117%2C1344%2C171%2C1392%2C197.3L1440%2C224L1440%2C320L1392%2C320C1344%2C320%2C1248%2C320%2C1152%2C320C1056%2C320%2C960%2C320%2C864%2C320C768%2C320%2C672%2C320%2C576%2C320C480%2C320%2C384%2C320%2C288%2C320C192%2C320%2C96%2C320%2C48%2C320L0%2C320Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')]" />
                </div>
                <div className="px-8 pb-8 relative">
                  <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 relative z-10">
                    <div className="w-32 h-32 rounded-2xl bg-gradient flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white">
                      {firstLastChar(user?.fullName)}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                      <h2 className="text-2xl font-bold">{user?.fullName}</h2>
                      <p className="text-slate-500">{user?.email}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        {user?.isActive ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success-50 text-success-500">
                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-danger-50 text-danger-500">
                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-danger-500" />
                            In Active
                          </span>
                        )}
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                          <i className="fas fa-map-marker-alt mr-1.5 text-slate-400" />
                          {user?.address?.city},{user?.address?.country}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                          <i className="fas fa-clock mr-1.5 text-slate-400" />
                          Joined : {formatDate(user?.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3">
                      <Link
                        to={`/update-user/${user?.id}`}
                        className="flex items-center justify-center px-4 py-2 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
                      >
                        <i className="fas fa-pen mr-2 text-xs" />
                        <span className="font-medium">Edit Profile</span>
                      </Link>
                      <button
                        id="deleteUserBtn2"
                        className="flex items-center justify-center px-4 py-2 bg-white border border-slate-200 text-danger-500 rounded-xl hover:bg-danger-50 hover:border-danger-500 transition-all cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
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
                          <p className="text-xs text-slate-500 mb-1">
                            Full Name
                          </p>
                          <p className="font-medium">{user?.fullName}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Email</p>
                          <p className="font-medium">{user?.email}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Phone</p>
                          <p className="font-medium">{user?.phone}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Age</p>
                          <p className="font-medium">{user?.age}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Gender</p>
                          <p className="font-medium">{user?.gender}</p>
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
                          <p className="font-medium">{user?.address?.street}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">City</p>
                          <p className="font-medium">{user?.address?.city}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">State</p>
                          <p className="font-medium">{user?.address?.state}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            ZIP Code
                          </p>
                          <p className="font-medium">{user?.address?.zip}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Country</p>
                          <p className="font-medium">
                            {user?.address?.country}
                          </p>
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
                          <p className="font-medium">{user?.id}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Created</p>
                          <p className="font-medium">
                            {formatDate(user?.createdAt)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            Last Updated
                          </p>
                          <p className="font-medium">
                            {formatDate(user?.updatedAt)}
                          </p>
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
                        {user?.education?.map((edu, index) => (
                          <div className="timeline-item" key={index}>
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                              <div className="flex justify-between mb-1">
                                <h4 className="font-semibold">{edu.degree}</h4>
                                <span className="text-sm text-slate-500">
                                  {edu.year}
                                </span>
                              </div>
                              <p className="text-slate-600">{edu.institute}</p>
                              <p className="text-sm text-slate-500 mt-1">
                                {edu.stream || "Details not provided"}
                              </p>
                            </div>
                          </div>
                        ))}
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
                        {user?.hobbies?.map((hobbie, index) => (
                          <span
                            className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-light text-primary-700 capitalize"
                            key={index}
                          >
                            {hobbie}
                          </span>
                        ))}
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
                          <p className="text-xs text-slate-500 mb-1">
                            Language
                          </p>
                          <p className="font-medium">
                            {user?.preferences?.language}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            Newsletter
                          </p>

                          {user?.preferences?.newsletterSubscribed ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
                              Subscribed
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-50 text-danger-500">
                              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-danger-500" />
                              Not Subscribed
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            Dark Mode
                          </p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
                            Enabled
                          </span>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            Two-Factor Authentication
                          </p>
                          {user?.preferences?.darkMode ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-success-500" />
                              Enabled
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-50 text-danger-500">
                              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-danger-500" />
                              Disabled
                            </span>
                          )}
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
                          href={user?.socialProfiles?.linkedIn || "#"}
                          target="_blank"
                          className="flex items-center px-4 py-2 rounded-xl bg-gradient-light text-slate-700"
                        >
                          <i className="fab fa-linkedin text-primary-500 mr-2" />
                          <span>LinkedIn</span>
                        </a>
                        <a
                          href={user?.socialProfiles?.github || "#"}
                          target="_blank"
                          className="flex items-center px-4 py-2 rounded-xl bg-gradient-light text-slate-700"
                        >
                          <i className="fab fa-github text-primary-500 mr-2" />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={user?.socialProfiles?.twitter || "#"}
                          target="_blank"
                          className="flex items-center px-4 py-2 rounded-xl bg-gradient-light text-slate-700"
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
          </>
        )}
      </AppLayout>
      {isOpen && (
        <DeleteUserModal
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          userName={user?.fullName}
          onConfirm={handleDeleteConfirm}
          isLoading={deleteMutation.isPending}
        />
      )}
    </>
  );
}

export default UserById;
