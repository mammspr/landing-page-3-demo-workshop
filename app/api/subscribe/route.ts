import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('mamm_lifestyle_blog');
    const collection = db.collection('subscribers');

    // Upsert subscriber record so duplicates update timestamp instead of throwing errors
    await collection.updateOne(
      { email: email.toLowerCase().trim() },
      {
        $set: {
          email: email.toLowerCase().trim(),
          updatedAt: new Date(),
          status: 'active',
        },
        $setOnInsert: {
          subscribedAt: new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing to The Matcha Dispatch!',
    });
  } catch (error: any) {
    console.error('MongoDB Subscription Error:', error);
    return NextResponse.json(
      { success: false, error: 'Database connection failed. Please try again.' },
      { status: 500 }
    );
  }
}
