"use client";

import useUser from "@/customHooks/useUser/useUser";
import useToast from "@/customHooks/useToast/useToast";
import { closeToast } from "@/features/toastSlice/toastSlice";
import { AppDispatch } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FormSubmissionToast = () => {
  const adminData = useUser()
  const [toastKey, setToastKey] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const isToast = useToast()

  
  useEffect(() => {
    if (adminData) {
      setToastKey((prev) => prev + 1);
    }
  }, [adminData]);

  useEffect(() => {
    if (adminData) {
      const timer = setTimeout(() => {
        dispatch(closeToast());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toastKey, adminData, dispatch]);

  if (!isToast || !adminData?.message) return null;

  const { success, message } = adminData;

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-md shadow-lg transition-all duration-300 ease-in-out
        ${success ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
    >
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default FormSubmissionToast;
