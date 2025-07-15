"use client";

import Link from "next/link";
import ProfileHeading from "../profileHeading/profileHeading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "@/features/profileSlice/profileSlice";
import { AppDispatch } from "@/store/store";
import AdminLogout from "../adminLogout/adminLogout";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-100 dark:bg-gray-900 p-6 flex flex-col justify-between border-r border-gray-200 dark:border-white/[.1]">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <ProfileHeading />
        </div>
        <nav className="flex flex-col gap-3 text-sm font-medium text-gray-800 dark:text-gray-200">
          <Link href="/" className="hover:text-black dark:hover:text-white">
            Home
          </Link>
          <Link href="/project" className="hover:text-black dark:hover:text-white">
            Project
          </Link>
          <Link href="/profile" className="hover:text-black dark:hover:text-white">
            Profile
          </Link>
        </nav>
      </div>

      <AdminLogout />
    </aside>
  );
};

export default Sidebar;
