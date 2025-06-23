import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Staff from '@/models/Staff';

// CORS headers setup (optional if not using edge function or external calls)
const setCorsHeaders = (response) => {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
};

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const updates = await req.json();

    const updatedStaff = await Staff.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedStaff) {
      return NextResponse.json({ success: false, message: 'Staff not found' }, { status: 404 });
    }

    const response = NextResponse.json({ success: true, data: updatedStaff });
    setCorsHeaders(response);
    return response;

  } catch (error) {
    console.error('Error updating staff:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

export function OPTIONS() {
  const response = NextResponse.json({}, { status: 200 });
  setCorsHeaders(response);
  return response;
}
