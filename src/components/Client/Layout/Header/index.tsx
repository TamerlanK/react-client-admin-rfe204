import { Link, NavLink } from "react-router-dom"

const ClientHeader = () => {
  return (
    <header className="fixed top-0 w-full inset-x-0 bg-slate-900 h-20 z-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="text-white text-2xl font-bold">
            React Client
          </Link>
          <nav className="flex justify-center items-center gap-x-4 h-full">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-white text-lg font-semibold px-4 py-2 rounded-md transition-colors ${
                  isActive ? "bg-slate-600/50" : "hover:bg-slate-700/30"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white text-lg font-semibold px-4 py-2 rounded-md transition-colors ${
                  isActive ? "bg-slate-600/50" : "hover:bg-slate-700/30"
                }`
              }
            >
              Contact
            </NavLink>
            {/* WILL BE DELETED LATER */}
            <Link className="text-white" to={"/admin"}>switch to admin</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default ClientHeader
