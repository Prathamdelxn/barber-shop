import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db'; // Adjust path to your db connection file
import Shop from '@/models/ShopInfo'; // Adjust path to your model

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    console.log(body); // Get request body
console.log(body);
    const newShop = await Shop.create(body); // Create the service

    return NextResponse.json({ message: 'Service created successfully', shop: newShop }, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ message: 'Failed to create service', error: error.message }, { status: 500 });
  }
}
