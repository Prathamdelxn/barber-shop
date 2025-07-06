import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import ShopInfo from '@/models/ShopInfo';

// PUT /api/shop/:id
export async function PUT(req, { params }) {
  await dbConnect();

  const { id } = params;
  console.log(id);
  const updatedData = await req.json();

  try {
    const updatedShop = await ShopInfo.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedShop) {
      return NextResponse.json({ message: 'Shop not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'Shop updated successfully',
      shop: updatedShop,
    });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { message: 'Error updating shop', error: error.message },
      { status: 500 }
    );
  }
}
