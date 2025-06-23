import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Slot from "@/models/Slot";

export async function GET() {
  try {
    await connectDB();

    // Get all slots for today
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const slots = await Slot.find({
      startTime: {
        $gte: today,
        $lt: tomorrow,
      },
    }).sort({ startTime: 1 });

    return NextResponse.json(slots);
  } catch (error) {
    console.error("Error fetching slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { userName, serviceType, preferredTime } = body;

    // Validate required fields
    if (!serviceType || !preferredTime) {
      return NextResponse.json(
        { error: "Service type and preferred time are required" },
        { status: 400 }
      );
    }

    // Calculate slot duration based on service type (in minutes)
    const serviceDurations = {
      Haircut: 30,
      "Beard Trim": 20,
      "Haircut & Beard Trim": 45,
      "Hair Coloring": 120,
      "Hair Styling": 60,
    };

    const duration = serviceDurations[serviceType] || 30;

    // Create start and end times
    const [hours, minutes] = preferredTime.split(":");
    const startTime = new Date();
    startTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + duration);

    // Check for slot conflicts
    const hasConflict = await Slot.hasConflict(startTime, endTime);

    if (hasConflict) {
      return NextResponse.json(
        { error: "This time slot is already booked" },
        { status: 409 }
      );
    }

    // Create new slot
    const newSlot = new Slot({
      userName: userName || "Guest",
      serviceType,
      startTime,
      endTime,
      status: "scheduled",
    });

    await newSlot.save();

    // Get updated list of slots
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const updatedSlots = await Slot.find({
      startTime: {
        $gte: today,
        $lt: tomorrow,
      },
    }).sort({ startTime: 1 });

    return NextResponse.json(updatedSlots, { status: 201 });
  } catch (error) {
    console.error("Error creating slot:", error);
    return NextResponse.json({ error: "Failed to book slot" }, { status: 500 });
  }
}
