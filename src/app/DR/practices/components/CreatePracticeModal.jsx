"use client";

export default function CreatePracticeModal({ openModal, setOpenModal }) {
  if (!openModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      {/* Modal */}
      <div className="w-full max-w-5xl bg-white rounded-3xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto hide-scrollbar">
        {" "}
        {/* Close */}
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black">Create Practice</h2>

          <p className="text-gray-600 mt-2">Add a new consultation practice</p>
        </div>
        {/* Form */}
        <form className="space-y-5">
          {/* Practice Name */}
          <div>
            <label className="block text-black font-medium mb-2">
              Practice Name
            </label>

            <input
              type="text"
              placeholder="Enter practice name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Practice Type */}
          <div>
            <label className="block text-black font-medium mb-2">
              Practice Type
            </label>

            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black">
              <option>Offline</option>
              <option>Online</option>
              <option>Hospital</option>
              <option>Clinic</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-black font-medium mb-2">
              Location
            </label>

            <textarea
              rows={3}
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          {/* Fee + Slot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-black font-medium mb-2">
                Consultation Fee
              </label>

              <input
                type="number"
                placeholder="Enter fee"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Slot Duration
              </label>

              <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black">
                <option>10 mins</option>
                <option>15 mins</option>
                <option>20 mins</option>
                <option>30 mins</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-black font-medium mb-2">Status</label>

            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-black hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
            >
              Create Practice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
