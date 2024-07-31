import { Outlet } from "react-router-dom"
import ClientHeader from "./Header"

const ClientLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ClientHeader />
      <main className="bg-slate-100 h-full grow">
        <Outlet />
      </main>
    </div>
  )
}

export default ClientLayout
