// app/api/shops/[id]/route.js

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/utils/db'; // make sure you have this
import Shop from '@/models/ShopInfo';   // adjust the path as needed

export async function GET(req, { params }) {
  await dbConnect();

  const { id } = params;
console.log(id)
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
    }

    const shop = await Shop.find({userId:id});
console.log(shop)
    if (!shop) {
      return NextResponse.json({ message: 'Shop not found' }, { status: 404 });
    }

    return NextResponse.json(shop, { status: 200 });
  } catch (error) {
    console.error('Error fetching shop:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
