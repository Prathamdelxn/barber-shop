import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Staff from '@/models/Staff';

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const body = await req.json();
    
    // Validate the request body
    if (typeof body.isActive !== 'boolean') {
      return NextResponse.json(
        { message: 'isActive must be a boolean' },
        { status: 400 }
      );
    }

    const updatedStaff = await Staff.findByIdAndUpdate(
      id,
      { isActive: body.isActive },
      { new: true }
    );

    if (!updatedStaff) {
      return NextResponse.json(
        { message: 'Staff not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Status updated successfully',
      data: updatedStaff
    });

  } catch (error) {
    console.error("Error updating staff status:", error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}