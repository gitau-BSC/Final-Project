import { Link } from "react-router-dom";
import studentDetailsStore from "../../store/studentDetails";

export default function Navbar() {
  const user = studentDetailsStore((state) => state.student);
  console.log(user);

  return (
    <header className="bg-purple-500/20 shadow-sm m-1 rounded-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          HostelHub
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4 flex items-center">
          {user ? (
            <>
                <Link to="/" className="text-gray-600 hover:text-primary">
                Home
                </Link>
              
              <Link to="/services" className="text-gray-600 hover:text-primary">
                Services
              </Link>
              <Link to="/book-now" className="text-gray-600 hover:text-primary">
                Bookings
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-primary font-medium">
                {user.fullnames}
              </Link>
              <button
                onClick={() => studentDetailsStore.getState().logout()}
                className="text-gray-600 hover:text-primary font-medium border-none bg-transparent cursor-pointer transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-primary">
                Login
              </Link>
              <Link to="/register" className="text-gray-600 hover:text-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
