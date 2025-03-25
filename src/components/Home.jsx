import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
  
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mt-3.5">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to HostelHub</h1>
            <p className="text-xl md:text-2xl mb-8">Streamline your hostel management with our all-in-one solution</p>
            <Button size="lg"  className="bg-purple-200" asChild>
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About HostelHub</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  HostelHub is a comprehensive hostel management system designed to simplify your daily operations. Our
                  platform helps you manage bookings, track occupancy, handle payments, and communicate with guests
                  effortlessly.
                </p>
                <p className="text-lg text-gray-600">
                  With years of experience in the hospitality industry, we understand the unique challenges hostels
                  face. That's why we've created a solution that's tailored to your needs, helping you focus on what
                  matters most - providing an exceptional experience for your guests.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img
                  src="./public/hostel_1.jpg"
                  alt="Stylish Hostel Reception"
                  width={500}
                  height={300}
                  className="rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">Why Choose HostelHub?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="text-primary mr-2" /> Easy-to-use interface
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="text-primary mr-2" /> Real-time availability updates
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="text-primary mr-2" /> Integrated payment system
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="text-primary mr-2" /> Guest communication tools
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="text-primary mr-2" /> Detailed reporting and analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="./public/hostel_2.jpg"
                  alt="Booking Management"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">Booking Management</h3>
                <p className="text-gray-600">
                  Effortlessly manage reservations, check-ins, and check-outs with our intuitive booking system.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/placeholder.svg?height=200&width=200&text=Housekeeping"
                  alt="Housekeeping"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">Housekeeping</h3>
                <p className="text-gray-600">
                  Keep track of room status, maintenance tasks, and cleaning schedules to ensure a smooth operation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="./public/hostel_1.jpg"
                  alt="Guest Services"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">Guest Services</h3>
                <p className="text-gray-600">
                  Manage guest requests, provide local recommendations, and enhance the overall guest experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Hostel Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                src="./public/hostel_2.jpg"
                alt="Cozy Lounge"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
              <img
                src="./public/hostel_1.jpg"
                alt="Modern Dorm"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
              <img
                src="./public/hostel_2.jpg"
                alt="Vibrant Kitchen"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
              <img
                src="./public/hostel_1.jpg"
                alt="Rooftop Terrace"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 HostelHub. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

