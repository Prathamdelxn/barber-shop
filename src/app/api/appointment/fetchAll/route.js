import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Appointment from '@/models/Appointment';

export async function GET() {
  await dbConnect();

  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 }); // Newest first

    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch appointments' }, { status: 500 });
  }
}
