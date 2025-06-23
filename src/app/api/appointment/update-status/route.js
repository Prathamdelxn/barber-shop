import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Appointment from '@/models/Appointment';
import mongoose from 'mongoose';

export async function PATCH(req) {
  await dbConnect();

  try {
    const { appointmentId, status } = await req.json();

    // Validate appointmentId and status
    if (!appointmentId || !mongoose.Types.ObjectId.isValid(appointmentId)) {
      return NextResponse.json({ success: false, error: 'Invalid appointment ID' }, { status: 400 });
    }

    if (!status) {
      return NextResponse.json({ success: false, error: 'Status is required' }, { status: 400 });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    );

    if (!updatedAppointment) {
      return NextResponse.json({ success: false, error: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedAppointment }, { status: 200 });
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
