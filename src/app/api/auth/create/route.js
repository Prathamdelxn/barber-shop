import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db'; // Replace with your db connect path
import User from '@/models/User';    // Replace with the correct model path
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();
    console.log(email)

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists.' }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({ email, password: hashedPassword });

    return NextResponse.json(
      { message: 'User created successfully', userId: newUser._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
