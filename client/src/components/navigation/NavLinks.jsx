import { NavLink } from "react-router-dom";
import navData from "../../data/navData";

export default function NavLinks({ onClick }) {
  return (
    <>
      {navData.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          onClick={onClick}
          className={({ isActive }) =>
            `transition hover:text-blue-600 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </>
  );
}