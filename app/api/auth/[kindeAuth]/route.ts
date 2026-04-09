import { NextRequest, NextResponse } from "next/server";
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(req: NextRequest, context: { params: { kindeAuth: string } }) {
  const res = await handleAuth(req, context);
  return res instanceof Response ? res : new Response("Not found", { status: 404 });
}
