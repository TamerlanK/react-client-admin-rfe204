import { Link, NavLink } from "react-router-dom"
import { useFavorites } from "../../../../contexts/FavoritesContext"

const ClientHeader = () => {
  const { favorites } = useFavorites()
  const favoritesCount = favorites.length

  return (
    <header className="fixed top-0 w-full inset-x-0 bg-slate-900 h-20 z-20">
      <div className="container mx-auto h-full px-6">
        <div className="flex justify-center sm:justify-between items-center h-full">
          <Link to="/" className="text-white text-2xl font-bold">
            React Client
          </Link>
          <nav className="justify-center items-center gap-x-4 h-full hidden sm:flex">
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
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `relative text-white text-lg font-semibold px-4 py-2 rounded-md transition-colors ${
                  isActive ? "bg-slate-600/50" : "hover:bg-slate-700/30"
                }`
              }
            >
              Favorites
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </NavLink>
            {/* WILL BE DELETED LATER */}
            <Link className="text-white" to={"/admin"}>
              switch to admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default ClientHeader
