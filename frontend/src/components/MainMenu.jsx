import { NavLink } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "font-bold" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu
