"use client";

import { useState } from "react";
import Link from "next/link";

const HomeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12 11.204 3.046a1.125 1.125 0 0 1 1.592 0L21.75 12M4.5 9.75V19.5A1.5 1.5 0 0 0 6 21h3.75v-4.5a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5V21H18a1.5 1.5 0 0 0 1.5-1.5V9.75"
    />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

const FileIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375H14.25V6.375A2.625 2.625 0 0 0 11.625 3.75h-4.5A2.625 2.625 0 0 0 4.5 6.375v11.25a2.625 2.625 0 0 0 2.625 2.625h9.75A2.625 2.625 0 0 0 19.5 17.625V14.25Z"
    />
  </svg>
);

const SettingsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281a1.125 1.125 0 0 0 .847.909c.503.13.986.338 1.437.609a1.125 1.125 0 0 0 1.173-.071l1.01-.674a1.125 1.125 0 0 1 1.42.138l1.833 1.833a1.125 1.125 0 0 1 .138 1.42l-.674 1.01a1.125 1.125 0 0 0-.07 1.173c.27.45.478.934.608 1.437a1.125 1.125 0 0 0 .91.847l1.28.213c.543.09.94.56.94 1.11v2.593c0 .55-.397 1.02-.94 1.11l-1.28.213a1.125 1.125 0 0 0-.91.847 6.715 6.715 0 0 1-.609 1.437 1.125 1.125 0 0 0 .071 1.173l.674 1.01a1.125 1.125 0 0 1-.138 1.42l-1.833 1.833a1.125 1.125 0 0 1-1.42.138l-1.01-.674a1.125 1.125 0 0 0-1.173-.07 6.715 6.715 0 0 1-1.437.608 1.125 1.125 0 0 0-.847.91l-.213 1.28c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.397-1.11-.94l-.213-1.28a1.125 1.125 0 0 0-.847-.91 6.715 6.715 0 0 1-1.437-.609 1.125 1.125 0 0 0-1.173.071l-1.01.674a1.125 1.125 0 0 1-1.42-.138l-1.833-1.833a1.125 1.125 0 0 1-.138-1.42l.674-1.01a1.125 1.125 0 0 0 .07-1.173 6.715 6.715 0 0 1-.608-1.437 1.125 1.125 0 0 0-.91-.847l-1.28-.213A1.125 1.125 0 0 1 3 13.296v-2.593c0-.55.397-1.02.94-1.11l1.28-.213a1.125 1.125 0 0 0 .91-.847 6.715 6.715 0 0 1 .609-1.437 1.125 1.125 0 0 0-.071-1.173l-.674-1.01a1.125 1.125 0 0 1 .138-1.42l1.833-1.833a1.125 1.125 0 0 1 1.42-.138l1.01.674a1.125 1.125 0 0 0 1.173.07 6.715 6.715 0 0 1 1.437-.608 1.125 1.125 0 0 0 .847-.91l.213-1.28Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const LogoutIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 12H9m0 0 3-3m-3 3 3 3"
    />
  </svg>
);

const drNavItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    label: "Practices",
    href: "/DR/practices",
    icon: UserIcon,
  },
  {
    label: "Schedules",
    href: "/DR/schedules",
    icon: FileIcon,
  },
  {
    label: "Slot Management",
    href: "/DR/appointment-slot",
    icon: FileIcon,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];

export default function SidebarLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-xl bg-white p-3 shadow-md md:hidden"
        aria-label="Open sidebar"
      >
        <MenuIcon className="h-6 w-6 text-gray-800" />
      </button>

      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-label="Close sidebar overlay"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-xl transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Imediko
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
            aria-label="Close sidebar"
          >
            <CloseIcon className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">
          {drNavItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-gray-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              U
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">User Name</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogoutIcon className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      <main className="min-h-screen px-4 py-20 md:ml-72 md:p-8">
        {children}
      </main>
    </div>
  );
}
