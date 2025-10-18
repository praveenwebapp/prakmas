import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // In a real application, you would process the form data here.
    // For example, send an email, save to a database, etc.
    console.log('Contact form submission:', { name, email, message });

    // Simulate a successful response
    return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Failed to process message.' }, { status: 500 });
  }
}
