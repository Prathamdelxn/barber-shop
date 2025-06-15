import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/utils/db';
import Service from '@/models/Service';

// CORS handling
export function OPTIONS() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return new Response(null, { status: 204, headers });
}

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { name, category, price } = body;

    if (!name || !category || typeof price !== 'number') {
      return NextResponse.json(
        { error: 'Missing or invalid fields' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    const newService = new Service({ name, category, price });
    const savedService = await newService.save();

    return NextResponse.json(
      { message: 'Service created successfully', service: savedService },
      {
        status: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
