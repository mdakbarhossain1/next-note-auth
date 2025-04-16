import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const { db } = await connectToDB();

  const existing = await db.collection('users').findOne({ email });
  if (existing) return NextResponse.json({ error: 'User exists' }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  await db.collection('users').insertOne({ email, password: hashed });

  return NextResponse.json({ success: true });
}
