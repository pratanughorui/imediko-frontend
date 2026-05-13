/*
✅ Set working days
✅ Set timings
✅ Break time
✅ Slot duration
*/

"use client";

import { useState } from "react";

export default function SchedulePage() {
  const [selectedPractice, setSelectedPractice] = useState("Saltlake Chamber");

  const schedules = [
    {
      id: 1,
      day: "Monday",
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      slotDuration: "15 mins",
      breakTime: "5 mins",
      status: "Active",
    },
    {
      id: 2,
      day: "Wednesday",
      startTime: "5:00 PM",
      endTime: "9:00 PM",
      slotDuration: "20 mins",
      breakTime: "10 mins",
      status: "Active",
    },
    {
      id: 3,
      day: "Friday",
      startTime: "11:00 AM",
      endTime: "3:00 PM",
      slotDuration: "15 mins",
      breakTime: "5 mins",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0] p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Schedules</h1>

          <p className="text-gray-700 mt-1">
            Manage your weekly consultation schedules
          </p>
        </div>

        {/* Add Schedule Button */}
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
          Add Schedule
        </button>
      </div>

      {/* Practice Selector */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-8">
        <label className="block text-black font-medium mb-3">
          Select Practice
        </label>

        <select
          value={selectedPractice}
          onChange={(e) => setSelectedPractice(e.target.value)}
          className="w-full md:w-96 border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black"
        >
          <option>Saltlake Chamber</option>
          <option>Apollo Clinic</option>
          <option>Online Consultation</option>
        </select>
      </div>

      {/* Schedule Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-black">
                  {schedule.day}
                </h2>

                <p className="text-gray-600 mt-1">
                  Weekly Consultation Schedule
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  schedule.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {schedule.status}
              </span>
            </div>

            {/* Schedule Details */}
            <div className="space-y-4">
              {/* Time */}
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

                <span>
                  {schedule.startTime} - {schedule.endTime}
                </span>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                  />
                </svg>

                <span>Slot Duration: {schedule.slotDuration}</span>
              </div>

              {/* Break Time */}
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
                    d="M12 8v4l3 3"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>Break Time: {schedule.breakTime}</span>
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
                    d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"
                  />
                </svg>
                Edit
              </button>

              {/* Disable */}
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
                    d="M18.364 5.636l-12.728 12.728"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.636 5.636l12.728 12.728"
                  />
                </svg>
                Disable
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
