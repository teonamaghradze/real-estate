import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <section className="navbar">
        <Navbar />
      </section>

      <section className="content">
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
