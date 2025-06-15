import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Staff from '@/models/Staff';

// POST /api/staff/create
export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { name, experience, phone, email, speciality, isActive } = body;

    // Validation (optional but recommended)
    if (!name || !phone || !email || !speciality) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Missing required fields' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const newStaff = await Staff.create({
      name,
      experience,
      phone,
      email,
      speciality,
      isActive: isActive ?? true, // default true
    });

    return new NextResponse(
      JSON.stringify({ success: true, data: newStaff }),
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Error creating staff:', error);
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Internal server error' }),
      { status: 500, headers: corsHeaders }
    );
  }
}

// CORS Headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Preflight request
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
