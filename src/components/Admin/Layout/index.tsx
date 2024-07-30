import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <main className="pt-20 container mx-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
