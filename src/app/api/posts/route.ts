import { connectToDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { title, content } = await req.json();
  const { db } = await connectToDB();

  await db.collection('posts').insertOne({ title, content, createdAt: new Date() });
  return NextResponse.json({ message: 'Post added' });
}

export async function GET() {
  const { db } = await connectToDB();
  const posts = await db.collection('posts').find().sort({ createdAt: -1 }).toArray();
  return NextResponse.json(posts);
}
