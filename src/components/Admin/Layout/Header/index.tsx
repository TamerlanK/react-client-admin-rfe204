import { Link, NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-red-600 h-20 z-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/admin" className="text-white text-2xl font-bold">
            React Admin
          </Link>
          <nav className="flex justify-center items-center gap-x-4 h-full">
            <NavLink
              to={"products"}
              className={({ isActive }) =>
                `text-white text-lg font-semibold px-4 py-2 rounded-md transition-colors ${
                  isActive ? "bg-red-700/90" : "hover:bg-red-700/60"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"add-product"}
              className={({ isActive }) =>
                `text-white text-lg font-semibold px-4 py-2 rounded-md transition-colors ${
                  isActive ? "bg-red-700/90" : "hover:bg-red-700/60"
                }`
              }
            >
              Add product
            </NavLink>
            {/* WILL BE DELETED LATER */}
            <Link to={"/"} className="text-white">
              switch to client
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
