import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-6 py-4">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
            <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link to="/book-now" className="hover:text-blue-600">Book Now</Link></li>
            <li><Link to="/student-dashboard" className="hover:text-blue-600">Student Dashboard</Link></li>
          </ul>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}

export default Layout;