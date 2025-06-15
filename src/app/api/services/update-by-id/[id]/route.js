import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Service from '@/models/Service';

// PUT /api/services/update/:id
export async function PUT(req, { params }) {
  await dbConnect();

  const { id } = params;
  const data = await req.json();

  try {
    const updatedService = await Service.findByIdAndUpdate(id, data, {
      new: true, // return the updated document
      runValidators: true,
    });

    if (!updatedService) {
      return new NextResponse(JSON.stringify({ success: false, message: 'Service not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    return new NextResponse(JSON.stringify({ success: true, data: updatedService }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Error updating service:', error);
    return new NextResponse(JSON.stringify({ success: false, message: 'Internal server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// CORS Headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Preflight request
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
