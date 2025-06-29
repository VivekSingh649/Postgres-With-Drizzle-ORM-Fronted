import { NavLink, useLocation } from "react-router";
import { Home, Users, User, Edit, Plus } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menus = [{ name: "Dashboard", icon: <Home />, path: "/" }];

  return (
    <aside className="fixed h-screen w-72 glass shadow-glass-lg z-20 border-r border-white/20">
      <div className="flex flex-col h-full">
        <div className="px-8 py-8">
          <h1 className="text-3xl font-extrabold text-gradient">PRISM</h1>
        </div>

        <nav className="flex-1 px-4 py-4">
          <ul className="space-y-1 main-menu">
            {menus.map((menu) => (
              <li key={menu.name}>
                <NavLink to={menu.path} className="menu-item active">
                  <span className="menu-icon">{menu.icon}</span>
                  <span>{menu.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto px-6 py-6 border-t border-slate-100">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center text-white font-medium">
                AD
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-slate-500">admin@prism.io</p>
            </div>
            <button className="ml-auto text-slate-400 hover:text-slate-600">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
