import { Link, NavLink } from "react-router-dom";

const ClientHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-slate-900 h-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="text-white text-2xl font-bold">
            React Client
          </Link>
          <nav className="flex justify-center items-center gap-x-4 h-full">
            <NavLink
              to={"/products"}
              className="text-white text-lg font-semibold"
            >
              Products
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-white text-lg font-semibold"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
