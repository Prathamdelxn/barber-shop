import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Appointment from '@/models/Appointment'; // ✅ Ensure this points to the correct schema

export async function POST(req) {
  await dbConnect();

  try {
    const {
      barber,
      services,
      totalPrice,
      time,
      date,
      customer,
      status = 'pending',
    } = await req.json();

    // Validate incoming data
    if (
      !barber ||
      !services ||
      !Array.isArray(services) ||
      services.length === 0 ||
      !customer?.name
    ) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const newAppointment = new Appointment({
      barber,
      services,
      totalPrice,
      time,
      date,
      customer,
      status,
    });

    await newAppointment.save();

    return NextResponse.json({ success: true, data: newAppointment }, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}
