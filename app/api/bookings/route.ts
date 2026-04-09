import { prisma } from "@/lib/prisma";
import { sendBookingEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const booking = await prisma.booking.create({
      data: {
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        visaType: body.visaType,
        date: new Date(body.date),
      },
    });

    // send email using Resend
    await sendBookingEmail(body);

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}/*
// File: app/api/booking/route.ts
import { prisma } from "@/lib/prisma";
import { sendBookingEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

// Define the shape of the request body
type BookingInput = {

  name: string;
  email: string;
  mobile: string;
  visaType: string;
  date: string; // ISO string from the form
};

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body: BookingInput = await req.json();

    // Basic validation
    if (!body.name || !body.email || !body.mobile || !body.visaType || !body.date) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create booking in Prisma (id is auto-generated)
    const booking = await prisma.booking.create({
      data: {
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        visaType: body.visaType,
        date: new Date(body.date),
      },
    });

    // Send email to business owner
    await sendBookingEmail({
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      visaType: body.visaType,
      date: new Date(body.date),
    });

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}*/