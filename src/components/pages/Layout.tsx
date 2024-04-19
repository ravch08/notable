import { Outlet } from "react-router-dom";
import { Header } from "../utils/helper";

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
