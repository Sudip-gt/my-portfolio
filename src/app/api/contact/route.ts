import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";


// Define the expected shape of the request body
type ContactRequestBody = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactRequestBody;
    const { name, email, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save to DB using Prisma
    const saved = await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Send success response
    return NextResponse.json(
      { message: "Message sent successfully!", saved },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error("❌ Error in POST /api/contact:", error.message);
    } else {
      console.error("❌ Unknown error occurred in POST /api/contact.");
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
