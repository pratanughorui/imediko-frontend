"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const features = [
    "Doctor Management",
    "Practice Scheduling",
    "Appointment Booking",
    "Slot Management",
    "Patient Tracking",
    "Technician Management",
  ];

  const roles = [
    {
      title: "Super User",
      description:
        "Manage doctors, technicians, appointments and system operations.",
    },
    {
      title: "Doctor",
      description:
        "Manage practices, schedules, slots and patient appointments.",
    },
    {
      title: "Technician",
      description:
        "Handle bookings, support operations and patient coordination.",
    },
    {
      title: "Patient",
      description:
        "Book appointments and manage consultation schedules easily.",
    },
  ];

  const stats = [
    {
      title: "100+",
      subtitle: "Doctors",
    },
    {
      title: "5000+",
      subtitle: "Appointments",
    },
    {
      title: "24/7",
      subtitle: "Booking Support",
    },
    {
      title: "50+",
      subtitle: "Practices",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 lg:px-12 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center text-lg font-bold">
              I
            </div>

            <h1 className="text-2xl font-bold text-black">Imediko</h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-black font-medium">
            <button className="hover:text-gray-600 transition">Home</button>

            <button className="hover:text-gray-600 transition">Features</button>

            <button className="hover:text-gray-600 transition">Roles</button>

            <button className="hover:text-gray-600 transition">Contact</button>
          </div>

          {/* Login Button */}
          <button
            onClick={() => router.push("/login")}
            className="bg-black text-white px-5 py-2.5 rounded-xl cursor-pointer hover:bg-gray-800 transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-black mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Smart Healthcare Management System
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Manage Doctors, Appointments & Practices Efficiently
            </h1>

            <p className="text-gray-700 text-lg mt-6 leading-8">
              Complete healthcare management solution for Super Users, Doctors,
              Technicians and Patients. Manage schedules, slots and appointments
              seamlessly.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button className="bg-black text-white px-7 py-4 rounded-2xl hover:bg-gray-800 transition text-lg">
                Get Started
              </button>

              <button className="border border-black text-black px-7 py-4 rounded-2xl hover:bg-black hover:text-white transition text-lg">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              {/* Dashboard Preview */}
              <div className="space-y-5">
                {/* Top Card */}
                <div className="bg-[#FAF3E0] rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-black font-bold text-lg">
                        Today's Appointments
                      </h3>

                      <p className="text-gray-700 mt-1">
                        24 Scheduled Patients
                      </p>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold">
                      24
                    </div>
                  </div>
                </div>

                {/* Small Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <h4 className="text-black font-bold text-2xl">12</h4>

                    <p className="text-gray-600 mt-1">Doctors</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <h4 className="text-black font-bold text-2xl">180</h4>

                    <p className="text-gray-600 mt-1">Slots</p>
                  </div>
                </div>

                {/* Schedule Card */}
                <div className="bg-black rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold">Weekly Schedule</h3>

                  <p className="mt-2 text-gray-300">
                    Manage doctor schedules and appointment slots efficiently.
                  </p>

                  <button className="mt-5 bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-200 transition">
                    View Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black">Core Features</h2>

            <p className="text-gray-700 mt-4 text-lg">
              Everything needed to manage healthcare operations smoothly
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold mb-5">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-black">{feature}</h3>

                <p className="text-gray-700 mt-3 leading-7">
                  Simplified management system for handling healthcare
                  operations efficiently.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROLE ACCESS SECTION ================= */}
      <section className="px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black">Access Portals</h2>

            <p className="text-gray-700 mt-4 text-lg">
              Different dashboards for different system users
            </p>
          </div>

          {/* Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-7 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF3E0] flex items-center justify-center text-black font-bold text-xl mb-5 border border-gray-200">
                  {role.title.charAt(0)}
                </div>

                <h3 className="text-2xl font-bold text-black">{role.title}</h3>

                <p className="text-gray-700 mt-4 leading-7">
                  {role.description}
                </p>

                <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                  Access Portal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center"
              >
                <h2 className="text-5xl font-bold text-black">{stat.title}</h2>

                <p className="text-gray-700 mt-4 text-lg">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white px-6 lg:px-12 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">Imediko</h2>

            <p className="text-gray-400 mt-4 leading-7">
              Smart healthcare management platform for doctors, technicians and
              patients.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <div className="space-y-3 text-gray-400">
              <p>Home</p>
              <p>Features</p>
              <p>Roles</p>
              <p>Contact</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Services</h3>

            <div className="space-y-3 text-gray-400">
              <p>Doctor Management</p>
              <p>Appointment Booking</p>
              <p>Schedule Management</p>
              <p>Patient Tracking</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact</h3>

            <div className="space-y-3 text-gray-400">
              <p>Kolkata, West Bengal</p>
              <p>support@imediko.com</p>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Imediko. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
