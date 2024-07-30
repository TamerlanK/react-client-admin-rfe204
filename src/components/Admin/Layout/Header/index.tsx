import { Link, NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-rose-600 h-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/admin" className="text-white text-2xl font-bold">
            React Admin
          </Link>
          <nav className="flex justify-center items-center gap-x-4 h-full">
            <NavLink
              to={"products"}
              className="text-white text-lg font-semibold"
            >
              Products
            </NavLink>
            <NavLink
              to={"add-product"}
              className="text-white text-lg font-semibold"
            >
              Add product
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
