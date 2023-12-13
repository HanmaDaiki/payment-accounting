import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const session = await getServerSession(authOptions);

  const data = await prisma.order.delete({
    where: {
      id: body.id,
      userId: session.user.id
    }
  });
  const orders = await prisma.order.findMany({
    where: {
      userId: session.user.id
    },
    select: {
      id: true,
      createAt: true,
      price: true,
      name: true,
      paymentState: true
    }
  })

  return NextResponse.json({ orders });
}