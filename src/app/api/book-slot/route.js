import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Slot from "@/models/Slot";

export async function POST(request) {
  try {
    console.log("Received booking request");
    const body = await request.json();
    console.log("Request body:", body);

    // Validate required fields (matching what UI sends)
    const { userName, phone, serviceType, preferredTime, price } = body;
    if (!userName || !phone || !serviceType || !preferredTime) {
      console.error("Missing required fields:", {
        userName,
        phone,
        serviceType,
        preferredTime,
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();
    console.log("Connected to database");

    // Parse the preferredTime (which comes as "HH:MM" in 24-hour format)
    const [hours, minutes] = preferredTime.split(":").map(Number);

    // Create start time for today (you might want to add date selection later)
    const startTime = new Date();
    startTime.setHours(hours, minutes, 0, 0);

    // If the time is in the past, schedule for tomorrow
    if (startTime < new Date()) {
      startTime.setDate(startTime.getDate() + 1);
    }

    // Get service duration (matching UI service names)
    const serviceDurations = {
      Haircut: 30,
      "Beard Trim": 20,
      "Haircut & Beard Trim": 45,
      "Hair Coloring": 120,
      "Hair Styling": 60,
    };

    const duration = serviceDurations[serviceType] || 30;
    const endTime = new Date(startTime.getTime() + duration * 60000);

    // Check for conflicts on the same day
    const dayStart = new Date(startTime);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(startTime);
    dayEnd.setHours(23, 59, 59, 999);

    const conflictingSlot = await Slot.findOne({
      startTime: { $gte: dayStart, $lte: dayEnd },
      $or: [
        {
          startTime: { $lt: endTime },
          endTime: { $gt: startTime },
        },
      ],
    });

    if (conflictingSlot) {
      console.error("Slot conflict detected:", conflictingSlot);
      return NextResponse.json(
        {
          error:
            "This time slot is already booked. Please choose a different time.",
          conflictingSlot: {
            startTime: conflictingSlot.startTime,
            endTime: conflictingSlot.endTime,
            serviceType: conflictingSlot.serviceType,
          },
        },
        { status: 409 }
      );
    }

    // Create new slot
    const slot = new Slot({
      userName,
      email: body.email || null, // Optional field
      phone,
      serviceType,
      startTime,
      endTime,
      notes: body.notes || "", // Optional field
      price: price || 0,
      status: "scheduled",
      createdAt: new Date(),
    });

    console.log("Creating new slot:", slot);
    await slot.save();
    console.log("Slot saved successfully");

    // Return the created slot data (what UI expects)
    const responseData = {
      success: true,
      message: "Appointment booked successfully!",
      slot: {
        id: slot._id,
        userName: slot.userName,
        phone: slot.phone,
        serviceType: slot.serviceType,
        startTime: slot.startTime,
        endTime: slot.endTime,
        price: slot.price,
        status: slot.status,
      },
    };

    console.log("Returning response:", responseData);
    return NextResponse.json(responseData, { status: 201 });
  } catch (error) {
    console.error("Error in book-slot API:", error);

    // Handle specific MongoDB errors
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A booking with this information already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: "Failed to book slot. Please try again.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to retrieve slots
export async function GET(request) {
  try {
    await connectDB();

    // Get today's slots
    const today = new Date();
    const dayStart = new Date(today);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(today);
    dayEnd.setHours(23, 59, 59, 999);

    const slots = await Slot.find({
      startTime: {
        $gte: dayStart,
        $lte: dayEnd,
      },
      status: { $ne: "cancelled" },
    }).sort({ startTime: 1 });

    return NextResponse.json({
      success: true,
      slots: slots,
      count: slots.length,
    });
  } catch (error) {
    console.error("Error fetching slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 500 }
    );
  }
}
