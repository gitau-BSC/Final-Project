import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      {/* Gradient Background (Fixed Issue) */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-600 opacity-20 pointer-events-none"></div>

      {/* Content (Now Clickable) */}
      <div className="text-center w-full px-6 relative z-10">
        <AlertCircle className="w-24 h-24 text-red-500 animate-bounce mx-auto" />
        <h1 className="text-9xl font-extrabold text-gray-900 mt-6">404</h1>
        <p className="text-2xl md:text-3xl font-medium mt-2">Oops! Page Not Found</p>
        <p className="text-lg text-gray-700 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Now Clickable */}
        <Link
          to="/"
          className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-lg text-lg shadow-md hover:bg-primary-dark transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
