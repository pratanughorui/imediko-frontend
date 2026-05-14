/*
✅ Add Practice
✅ Edit Practice
✅ Delete Practice
*/

"use client";
import { useState } from "react";
import CreatePracticeModal from "./components/CreatePracticeModal";

export default function PracticesPage() {
  const [openModal, setOpenModal] = useState(false);

  const practices = [
    {
      id: 1,
      name: "Saltlake Chamber",
      type: "Offline",
      location: "Saltlake Sector V",
      fee: 500,
      slotDuration: "15 mins",
      status: "Active",
    },
    {
      id: 2,
      name: "Apollo Clinic",
      type: "Hospital",
      location: "EM Bypass, Kolkata",
      fee: 1000,
      slotDuration: "20 mins",
      status: "Active",
    },
    {
      id: 3,
      name: "Online Consultation",
      type: "Online",
      location: "Google Meet",
      fee: 700,
      slotDuration: "10 mins",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Practices</h1>

          <p className="text-gray-700 mt-1">
            Manage your consultation practices
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-gray-800 transition"
        >
          {/* Plus SVG */}
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
          Add Practice
        </button>
      </div>

      {/* Modal */}
      <CreatePracticeModal openModal={openModal} setOpenModal={setOpenModal} />

      {/* Practice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {practices.map((practice) => (
          <div
            key={practice.id}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-black">
                  {practice.name}
                </h2>

                <p className="text-sm text-gray-600 mt-1">{practice.type}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  practice.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {practice.status}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-4">
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

              {/* Slot Duration */}
              <div className="flex items-center gap-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7v5l3 3"
                  />
                </svg>

                <span>{practice.slotDuration} / slot</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-6">
              {/* Edit */}
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-xl hover:bg-gray-100 transition text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5h2M12 20h9"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"
                  />
                </svg>
                Edit
              </button>

              {/* Delete */}
              <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2.5 rounded-xl hover:bg-red-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 7V4h6v3m-7 4v6m4-6v6m4-6v6"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 7l1 13h12l1-13"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
