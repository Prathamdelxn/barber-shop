"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICE_TYPES = [
  {
    id: "haircut",
    name: "Haircut",
    duration: 30,
    icon: "✂️",
    price: 2000, // ₹2000 (was $25)
  },
  {
    id: "beard-trim",
    name: "Beard Trim",
    duration: 20,
    icon: "🧔",
    price: 1200, // ₹1200 (was $15)
  },
  {
    id: "haircut-beard",
    name: "Haircut & Beard Trim",
    duration: 45,
    icon: "👨",
    price: 2800, // ₹2800 (was $35)
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    duration: 120,
    icon: "🎨",
    price: 6400, // ₹6400 (was $80)
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    duration: 60,
    icon: "💇",
    price: 3600, // ₹3600 (was $45)
  },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      slots.push(time);
    }
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

function convertTo24Hour(time12h) {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  if (hours === "12") hours = "00";
  if (modifier === "PM" && hours !== "12") hours = parseInt(hours, 10) + 12;

  return `${hours.padStart(2, "0")}:${minutes}`;
}

export default function BookingForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: SERVICE_TYPES[0].id,
    preferredTime: TIME_SLOTS[0],
    timePeriod: "AM",
  });
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const selectedService = SERVICE_TYPES.find(
        (s) => s.id === formData.serviceType
      );

      const time24 = convertTo24Hour(
        `${formData.preferredTime} ${formData.timePeriod}`
      );

      const slotData = {
        userName: formData.name || "Guest",
        phone: formData.phone,
        serviceType: selectedService.name,
        preferredTime: time24,
        price: selectedService.price,
      };

      console.log("Submitting booking data:", slotData);

      const response = await fetch("/api/book-slot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(slotData),
      });

      const responseData = await response.json();
      console.log("Booking response:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to book slot");
      }

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        serviceType: SERVICE_TYPES[0].id,
        preferredTime: TIME_SLOTS[0],
        timePeriod: "AM",
      });

      onSuccess(responseData);
    } catch (err) {
      console.error("Booking error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectedService = SERVICE_TYPES.find(
    (s) => s.id === formData.serviceType
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-5">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="+91 98765 43210"
              required
            />
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2.5">
          Select Service
        </label>
        <div className="grid grid-cols-2 gap-3">
          {SERVICE_TYPES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                id={service.id}
                name="serviceType"
                value={service.id}
                checked={formData.serviceType === service.id}
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor={service.id}
                className={`flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.serviceType === service.id
                    ? "border-blue-500 bg-blue-50/50"
                    : "border-gray-200 hover:border-blue-200"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <div className="font-medium text-gray-900">
                    {service.name}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {service.duration} mins • ₹{service.price}
                </div>
              </label>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Select Time
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              {TIME_SLOTS.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="timePeriod"
              value={formData.timePeriod}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Options Toggle */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowAdditionalFields(!showAdditionalFields)}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
        >
          {showAdditionalFields ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Hide additional options
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Add special requests
            </>
          )}
        </button>
      </div>

      {/* Additional Fields (Conditional) */}
      {showAdditionalFields && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
          className="space-y-5 overflow-hidden"
        >
          {/* Additional Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Special Requests
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes || ""}
              onChange={handleChange}
              rows={3}
              className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Any specific styling preferences?"
            />
          </div>

          {/* Service Summary */}
          {selectedService && (
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">
                Booking Summary
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-medium">{selectedService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">
                    {selectedService.duration} minutes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-medium">₹{selectedService.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">
                    {formData.preferredTime} {formData.timePeriod}
                  </span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Status Messages */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4"
        >
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-red-400 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </motion.div>
      )}

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4"
        >
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-green-400 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-green-700">
              Appointment booked successfully!
            </p>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </div>
        ) : (
          "Confirm Booking"
        )}
      </motion.button>
    </form>
  );
}
