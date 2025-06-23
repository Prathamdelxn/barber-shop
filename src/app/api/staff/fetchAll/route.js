import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/utils/db'; // Make sure this connects to MongoDB
import Staff from '@/models/Staff'; // Your Staff model

export async function GET(req) {
  try {
    await dbConnect();

    const allStaff = await Staff.find();

    return NextResponse.json({ success: true, staff: allStaff }, { status: 200 });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return NextResponse.json({ success: false, message: 'Failed to fetch staff', error: error.message }, { status: 500 });
  }
}
