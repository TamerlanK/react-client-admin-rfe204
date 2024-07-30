import { Outlet } from "react-router-dom";
import ClientHeader from "./Header";

const ClientLayout = () => {
  return (
    <div>
      <ClientHeader />
      <main className="pt-20 container mx-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
