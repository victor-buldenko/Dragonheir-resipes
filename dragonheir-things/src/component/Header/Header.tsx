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

      <a
        href="https://t.me/od1ngamings"
        className="header-link"
        target="_blank"
      >
        Спільнота
      </a>

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
        <a
          onClick={() => setBurgerIsOpen(!burgerIsOpen)}
          className="mobilelink"
          href="https://t.me/od1ngamings"
          target="_blank"
        >
          Спільнота
        </a>
      </div>
      <Burger status={burgerIsOpen} click={setBurgerIsOpen} />
    </header>
  );
};
