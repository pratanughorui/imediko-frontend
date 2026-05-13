/*
✅ View slots
✅ Block slots
✅ Mark unavailable
✅ Emergency leave
*/
"use client";

import { useState } from "react";

export default function SlotManagementPage() {
  const [selectedPractice, setSelectedPractice] = useState("Saltlake Chamber");
  const [selectedSchedule, setSelectedSchedule] = useState("Monday Schedule");
  const [generateType, setGenerateType] = useState("Weekly");

  const slots = {
    Monday: ["10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM"],
    Tuesday: ["10:00 AM", "10:15 AM", "10:30 AM"],
    Wednesday: ["5:00 PM", "5:20 PM", "5:40 PM", "6:00 PM"],
    Thursday: [],
    Friday: ["11:00 AM", "11:15 AM", "11:30 AM"],
    Saturday: [],
    Sunday: [],
  };

  return (
    <div className="min-h-screen bg-[#FAF3E0] p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Slot Management</h1>

          <p className="text-gray-700 mt-1">
            Generate and manage appointment slots
          </p>
        </div>

        {/* Generate Button */}
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6" />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 20v-6h-6"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 18.364A9 9 0 1018.364 5.636"
            />
          </svg>
          Generate Slots
        </button>
      </div>

      {/* Configuration Section */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Practice */}
          <div>
            <label className="block text-black font-medium mb-2">
              Select Practice
            </label>

            <select
              value={selectedPractice}
              onChange={(e) => setSelectedPractice(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black"
            >
              <option>Saltlake Chamber</option>
              <option>Apollo Clinic</option>
              <option>Online Consultation</option>
            </select>
          </div>

          {/* Schedule */}
          <div>
            <label className="block text-black font-medium mb-2">
              Select Schedule
            </label>

            <select
              value={selectedSchedule}
              onChange={(e) => setSelectedSchedule(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black"
            >
              <option>Monday Schedule</option>
              <option>Wednesday Schedule</option>
              <option>Friday Schedule</option>
            </select>
          </div>

          {/* Generate Type */}
          <div>
            <label className="block text-black font-medium mb-2">
              Generate Type
            </label>

            <select
              value={generateType}
              onChange={(e) => setGenerateType(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black"
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="flex items-center justify-between bg-white rounded-2xl p-5 shadow-md mb-8">
        <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition text-black">
          Previous Week
        </button>

        <h2 className="text-lg font-bold text-black">
          13 May 2026 - 19 May 2026
        </h2>

        <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition text-black">
          Next Week
        </button>
      </div>

      {/* Weekly Slots */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {Object.entries(slots).map(([day, daySlots]) => (
          <div
            key={day}
            className="bg-white rounded-2xl p-5 shadow-md border border-gray-200"
          >
            {/* Day Header */}
            <div className="mb-5">
              <h3 className="text-xl font-bold text-black">{day}</h3>

              <p className="text-gray-600 text-sm mt-1">
                {daySlots.length} Slots
              </p>
            </div>

            {/* Slot List */}
            <div className="flex flex-wrap gap-3">
              {daySlots.length > 0 ? (
                daySlots.map((slot, index) => (
                  <button
                    key={index}
                    className="px-3 py-2 rounded-xl bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition"
                  >
                    {slot}
                  </button>
                ))
              ) : (
                <div className="text-gray-400 text-sm">No Slots</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
