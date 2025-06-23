import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Staff from '@/models/Staff';

export async function DELETE(req, { params }) {
  try {
    await dbConnect();

    const { id } = params;

    const deletedStaff = await Staff.findByIdAndDelete(id);

    if (!deletedStaff) {
      return NextResponse.json({ success: false, message: 'Staff not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Staff deleted successfully', staff: deletedStaff }, { status: 200 });
  } catch (error) {
    console.error('Delete staff error:', error);
    return NextResponse.json({ success: false, message: 'Error deleting staff', error: error.message }, { status: 500 });
  }
}
