import { signUpUserSchema } from "@/app/validations";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = signUpUserSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json(newUser.email, { status: 201 });
}
