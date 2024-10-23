import logo from "../assets/khushiKumarLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";  // Corrected icon

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
        <FaLinkedin />
        <FaGithub />
        <FaInstagramSquare />
        <FaTwitter />  {/* Corrected icon */}
      </div>
    </nav>
  );
};

export default Navbar;

