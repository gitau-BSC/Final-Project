import { useState } from "react";
import { Calendar, Home, CheckCircle, Users } from "lucide-react";

export default function BookNow() {
  // Demo room data
  const rooms = [
    { id: 1, name: "Single Room", price: "KES 5,000", available: true },
    { id: 2, name: "Double Room", price: "KES 8,500", available: false },
    { id: 3, name: "Deluxe Room", price: "KES 12,000", available: true },
  ];

  // Demo bookings data
  const [bookings, setBookings] = useState([
    { id: 1, fullName: "John Doe", email: "john@example.com", roomType: "Single Room", checkIn: "2025-03-10", checkOut: "2025-03-15" },
    { id: 2, fullName: "Jane Smith", email: "jane@example.com", roomType: "Deluxe Room", checkIn: "2025-03-12", checkOut: "2025-03-18" },
  ]);

  // Form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle booking submission
  const handleBooking = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.roomType || !form.checkIn || !form.checkOut) {
      alert("Please fill in all fields!");
      return;
    }
    
    const newBooking = {
      id: bookings.length + 1,
      ...form,
    };
    
    setBookings([...bookings, newBooking]); // Add new booking to the list
    setForm({ fullName: "", email: "", roomType: "", checkIn: "", checkOut: "" }); // Reset form
    alert(`Booking Confirmed for ${newBooking.fullName}!`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book a Room</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your preferred room type and complete the form to confirm your booking.
          </p>
        </div>

        {/* Room List */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className={`p-6 rounded-lg shadow-md ${room.available ? "bg-white" : "bg-gray-200"} text-center`}>
              <div className="flex justify-center mb-4">
                <Home className="text-primary w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
              <p className="text-gray-600">{room.price}</p>
              {room.available ? (
                <span className="text-green-600 font-medium">Available</span>
              ) : (
                <span className="text-red-600 font-medium">Booked</span>
              )}
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="mt-16 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Complete Your Booking</h2>
          <form onSubmit={handleBooking} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-primary"
              required
            />
            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-primary"
              required
            >
              <option value="">Select Room Type</option>
              {rooms
                .filter((room) => room.available)
                .map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name} - {room.price}
                  </option>
                ))}
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-primary"
                required
              />
              <input
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-md flex justify-center items-center space-x-2 hover:bg-primary-dark transition"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Confirm Booking</span>
            </button>
          </form>
        </div>

        {/* Booking List */}
        <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" /> Booking List
          </h2>
          {bookings.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Room</th>
                  <th className="p-3 border">Check-in</th>
                  <th className="p-3 border">Check-out</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-t">
                    <td className="p-3 border">{booking.fullName}</td>
                    <td className="p-3 border">{booking.roomType}</td>
                    <td className="p-3 border">{booking.checkIn}</td>
                    <td className="p-3 border">{booking.checkOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600">No bookings yet.</p>
          )}
        </div>

      </div>
    </section>
  );
}
