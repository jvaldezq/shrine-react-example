import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-50 flex flex-col w-full h-screen">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
