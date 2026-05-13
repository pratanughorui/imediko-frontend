"use client";

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Amit Sharma",
      specialization: "Cardiologist",
      phone: "+91 9876543210",
      email: "amitsharma@gmail.com",
      practices: [
        {
          name: "Saltlake Chamber",
          type: "Offline",
          location: "Saltlake Sector V",
          fee: 500,
          schedules: [
            {
              day: "Monday",
              start: "10:00 AM",
              end: "2:00 PM",
            },
            {
              day: "Wednesday",
              start: "5:00 PM",
              end: "9:00 PM",
            },
          ],
        },
        {
          name: "Online Consultation",
          type: "Online",
          location: "Google Meet",
          fee: 700,
          schedules: [
            {
              day: "Friday",
              start: "11:00 AM",
              end: "3:00 PM",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      name: "Dr. Priya Roy",
      specialization: "Dermatologist",
      phone: "+91 9123456780",
      email: "priyaroy@gmail.com",
      practices: [
        {
          name: "Apollo Clinic",
          type: "Hospital",
          location: "EM Bypass, Kolkata",
          fee: 1000,
          schedules: [
            {
              day: "Tuesday",
              start: "9:00 AM",
              end: "1:00 PM",
            },
            {
              day: "Thursday",
              start: "4:00 PM",
              end: "8:00 PM",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0] p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black">Doctors Management</h1>

        <p className="text-gray-700 mt-1">
          View all doctors, practices and schedules
        </p>
      </div>

      {/* Doctor Cards */}
      <div className="space-y-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-3xl p-6 shadow-md border border-gray-200"
          >
            {/* Doctor Info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-black">{doctor.name}</h2>

                <p className="text-gray-700 mt-1">{doctor.specialization}</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 text-black">
                  <div className="flex items-center gap-2">
                    {/* Phone SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.57 2.28a2 2 0 01-.45 1.86l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 011.86-.45l2.28.57A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 3V2a2 2 0 012-2h1z"
                      />
                    </svg>

                    <span>{doctor.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Email SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12l-4-4-4 4"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16v12H4z"
                      />
                    </svg>

                    <span>{doctor.email}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition text-black">
                  View Details
                </button>

                <button className="px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                  Manage
                </button>
              </div>
            </div>

            {/* Practices */}
            <div>
              <h3 className="text-xl font-bold text-black mb-5">Practices</h3>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {doctor.practices.map((practice, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-5"
                  >
                    {/* Practice Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h4 className="text-lg font-bold text-black">
                          {practice.name}
                        </h4>

                        <p className="text-gray-600 mt-1">{practice.type}</p>
                      </div>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </div>

                    {/* Practice Details */}
                    <div className="space-y-3 mb-5">
                      {/* Location */}
                      <div className="flex items-center gap-3 text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                        <span>{practice.location}</span>
                      </div>

                      {/* Fee */}
                      <div className="flex items-center gap-3 text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 1.12-3 2.5S10.343 13 12 13s3 1.12 3 2.5S13.657 18 12 18m0-10v10"
                          />
                        </svg>

                        <span>₹{practice.fee}</span>
                      </div>
                    </div>

                    {/* Schedule Section */}
                    <div>
                      <h5 className="text-black font-semibold mb-3">
                        Schedules
                      </h5>

                      <div className="space-y-3">
                        {practice.schedules.map((schedule, i) => (
                          <div
                            key={i}
                            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between"
                          >
                            <div>
                              <p className="text-black font-medium">
                                {schedule.day}
                              </p>

                              <p className="text-gray-600 text-sm mt-1">
                                {schedule.start} - {schedule.end}
                              </p>
                            </div>

                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                              Available
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
