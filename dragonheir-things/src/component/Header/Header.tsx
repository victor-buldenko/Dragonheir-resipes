import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <NavLink 
        to="/heroes" 
        className={({ isActive }) => isActive ? "header-link header-link--active" : 'header-link'}
      >
        Герої
      </NavLink>

      <NavLink 
        to="/recipes"
        className={({ isActive }) => isActive ? "header-link header-link--active" : 'header-link'}      
      >
        Рецепти
      </NavLink>
    </header>
  );
};
