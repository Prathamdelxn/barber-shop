"use client";

import { useState, useEffect } from "react";
import SlotList from "./components/SlotList";
import BookingForm from "./components/BookingForm";
import { motion } from "framer-motion";

export default function UserPage() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentServing, setCurrentServing] = useState(null);

  const fetchSlots = async () => {
    try {
      const response = await fetch("/api/slots");
      if (!response.ok) throw new Error("Failed to fetch slots");
      const data = await response.json();
      setSlots(data);

      // Find current serving slot
      const now = new Date();
      const currentSlot = data.find((slot) => {
        const startTime = new Date(slot.startTime);
        const endTime = new Date(slot.endTime);
        return now >= startTime && now <= endTime;
      });
      setCurrentServing(currentSlot);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlots();
    // Refresh slots every 30 seconds
    const interval = setInterval(fetchSlots, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleBookingSuccess = (updatedSlots) => {
    // Update slots with the new data
    setSlots(updatedSlots);

    // Update current serving
    const now = new Date();
    const currentSlot = updatedSlots.find((slot) => {
      const startTime = new Date(slot.startTime);
      const endTime = new Date(slot.endTime);
      return now >= startTime && now <= endTime;
    });
    setCurrentServing(currentSlot);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Salon
            </h1>
            <p className="text-xl text-blue-100">
              Book your appointment and transform your look today
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Current Serving Section */}
        {currentServing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-green-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Now Serving
                </h2>
                <p className="text-3xl font-semibold text-green-600">
                  {currentServing.userName || "Guest"}
                </p>
                <p className="text-gray-600 mt-1">
                  {currentServing.serviceType}
                </p>
              </div>
              <div className="text-right">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  In Progress
                </div>
                <p className="text-gray-500 mt-2">
                  {new Date(currentServing.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Booking Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Book Your Appointment
            </h2>
            <BookingForm onSuccess={handleBookingSuccess} />
          </motion.div>

          {/* Slots List Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Today's Schedule
            </h2>
            <SlotList slots={slots} loading={loading} error={error} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
