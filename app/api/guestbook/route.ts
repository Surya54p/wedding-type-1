import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.guestbook.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.message) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const data = await prisma.guestbook.create({
    data: {
      name: body.name,
      message: body.message,
    },
  });

  return NextResponse.json(data, { status: 201 });
}
