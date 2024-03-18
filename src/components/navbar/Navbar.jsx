import { useState } from "react";
import "./Navbar.scss";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <section className="left-nav">
        logo
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </section>

      <section className="right-nav">
        <a href="/">sign in</a>
        <a href="/">sign up</a>
        <CiMenuBurger onClick={() => setOpen(!open)} className="menu-icon" />
      </section>

      <section className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">sign in</a>
        <a href="/">sign up</a>
      </section>
    </nav>
  );
}

export default Navbar;
