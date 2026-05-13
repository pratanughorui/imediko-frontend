"use client";

export default function TechnicianManagementPage() {
  const technicians = [
    {
      id: 1,
      name: "Rahul Das",
      role: "Receptionist",
      phone: "+91 9876543210",
      email: "rahuldas@gmail.com",
      username: "rahul123",
      experience: "3 Years",
      status: "Active",
    },
    {
      id: 2,
      name: "Sourav Roy",
      role: "Booking Assistant",
      phone: "+91 9123456789",
      email: "souravroy@gmail.com",
      username: "souravroy",
      experience: "2 Years",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Ankita Paul",
      role: "Support Staff",
      phone: "+91 9988776655",
      email: "ankitapaul@gmail.com",
      username: "ankita01",
      experience: "4 Years",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0] p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">
            Technician Management
          </h1>

          <p className="text-gray-700 mt-1">
            Manage all technicians and support staff
          </p>
        </div>

        {/* Add Technician Button */}
        <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition w-fit">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Technician
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search technician..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Filter */}
          <div>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Technician Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {technicians.map((technician) => (
          <div
            key={technician.id}
            className="bg-white rounded-3xl p-6 shadow-md border border-gray-200"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-black">
                    {technician.name}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      technician.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {technician.status}
                  </span>
                </div>

                <p className="text-gray-700">{technician.role}</p>
              </div>

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                {technician.name.charAt(0)}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {/* Phone */}
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
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.57 2.28a2 2 0 01-.45 1.86l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 011.86-.45l2.28.57A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 3V2a2 2 0 012-2h1z"
                  />
                </svg>

                <span>{technician.phone}</span>
              </div>

              {/* Email */}
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
                    d="M4 6h16v12H4z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7l8 6 8-6"
                  />
                </svg>

                <span>{technician.email}</span>
              </div>

              {/* Username */}
              <div className="flex items-center gap-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="8" r="4" />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20c0-3 3-5 6-5s6 2 6 5"
                  />
                </svg>

                <span>{technician.username}</span>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="9" />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7v5l3 3"
                  />
                </svg>

                <span>{technician.experience}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {/* View */}
              <button className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition text-black">
                View
              </button>

              {/* Edit */}
              <button className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                Edit
              </button>

              {/* Delete */}
              <button className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
