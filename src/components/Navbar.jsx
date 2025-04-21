// components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-600 hover:text-blue-800">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
