import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return NextResponse.json({ message: 'Login successful', token ,user:user });
}
