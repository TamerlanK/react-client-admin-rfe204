import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <main className="bg-slate-100 h-full grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
