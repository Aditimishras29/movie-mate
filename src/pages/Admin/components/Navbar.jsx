import { useState } from "react";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: MovieMate Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <Image
              src="/download.png"
              width={250}
              height ={50}
              alt="Picture of the author"
            />
          </Link>
        </div>

        {/* Right Side: Menu Items and Login Button */}
        <div className="flex items-center space-x-4">
          {/* SignUp/Login Button */}
          <Link
            href="/signin"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </Link>

          {/* Menu Icon */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <ImCancelCircle size={24} />
            ) : (
              <CgMenuGridO size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-gray-700 p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/movies" className="text-white block">
                Movies
              </Link>
            </li>
            <li>
              <Link href="/theaters" className="text-white block">
                Theaters
              </Link>
            </li>
            <li>
              <Link href="/showtimes" className="text-white block">
                Showtimes
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="text-white block">
                Reservations
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-white block">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
