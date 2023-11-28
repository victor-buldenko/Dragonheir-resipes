import { Link, NavLink } from "react-router-dom";
import { Burger } from "../Burger";
import {  useLayoutEffect, useState } from "react";
import classNames from "classnames";

export const Header: React.FC = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('scroll-lock', burgerIsOpen);
  }, [burgerIsOpen]);

  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "header-link header-link--active" : "header-link"
        }
      >
        Головна
      </NavLink>

      <NavLink
        to="/heroes"
        className={({ isActive }) =>
          isActive ? "header-link header-link--active" : "header-link"
        }
      >
        Герої
      </NavLink>

      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? "header-link header-link--active" : "header-link"
        }
      >
        Рецепти
      </NavLink>

      <NavLink
        to="/guides"
        className={({ isActive }) =>
          isActive ? "header-link header-link--active" : "header-link disabled"
        } // delete DISABLED class
      >
        гайди
      </NavLink>

      <div
        className={classNames("mobilemenu", {
          "mobilemenu-open": burgerIsOpen,
        })}
        onClick={() => setBurgerIsOpen(!burgerIsOpen)}
      >
        <Link
          onClick={() => setBurgerIsOpen(!burgerIsOpen)}
          className="mobilelink"
          to="/"
        >
          Головна
        </Link>
        <Link
          onClick={() => setBurgerIsOpen(!burgerIsOpen)}
          className="mobilelink"
          to="/heroes"
        >
          Герої
        </Link>
        <Link
          onClick={() => setBurgerIsOpen(!burgerIsOpen)}
          className="mobilelink"
          to="/recipes"
        >
          Рецепти
        </Link>
        <Link
        to="/guides"
        className="mobilelink disabled" // delete DISABLED class
      >
        гайди
      </Link>
      </div>
      <Burger status={burgerIsOpen} click={setBurgerIsOpen} />
    </header>
  );
};
