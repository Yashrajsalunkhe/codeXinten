import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex gap-4">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/translator" className="hover:text-yellow-300">Translator</Link>
      <Link to="/generator" className="hover:text-yellow-300">Random Generator</Link>
    </nav>
  );
};

export default Navbar;
