import { Briefcase, BedDouble, ConciergeBell } from "lucide-react";

export default function ServicesPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Booking Management */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">
              <Briefcase className="text-primary w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Booking Management</h3>
            <p className="text-gray-600">
              Easily manage reservations, check-ins, and check-outs with our intuitive system.
            </p>
          </div>

          {/* Housekeeping */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">
              <BedDouble className="text-primary w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Housekeeping</h3>
            <p className="text-gray-600">
              Keep track of room status, maintenance tasks, and cleaning schedules effortlessly.
            </p>
          </div>

          {/* Guest Services */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">
              <ConciergeBell className="text-primary w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Guest Services</h3>
            <p className="text-gray-600">
              Enhance guest experiences with seamless communication and concierge services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
