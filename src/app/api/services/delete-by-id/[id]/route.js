import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Service from '@/models/Service';

// DELETE /api/services/delete/:id
export async function DELETE(req, { params }) {
  await dbConnect();

  const { id } = params;

  try {
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return new NextResponse(JSON.stringify({ success: false, message: 'Service not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    return new NextResponse(JSON.stringify({ success: true, message: 'Service deleted successfully' }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Error deleting service:', error);
    return new NextResponse(JSON.stringify({ success: false, message: 'Internal server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// CORS Headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Preflight request
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
