"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SlotCard = ({ slot, index }) => {
  const startTime = new Date(slot.startTime);
  const endTime = new Date(slot.endTime);
  const isPast = startTime < new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-lg shadow-sm border ${
        isPast ? "border-gray-200 opacity-50" : "border-blue-100"
      } p-4 hover:shadow-md transition-shadow duration-200`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {slot.userName?.[0] || "G"}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {slot.userName || "Guest"}
              </h3>
              <p className="text-sm text-gray-600">{slot.serviceType}</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">
            {startTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="text-xs text-gray-500">
            {endTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
      {!isPast && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2">
          <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Upcoming
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function SlotList() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch("/api/slot/fetchAll");
        if (!response.ok) {
          throw new Error("Failed to fetch slots");
        }
        const data = await response.json();
        setSlots(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-red-50 border border-red-200 rounded-lg p-4"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Error loading slots
            </h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {slots.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            No slots booked yet
          </h3>
          <p className="text-gray-500">No appointments found</p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {slots.map((slot, index) => (
            <SlotCard key={slot._id || index} slot={slot} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
