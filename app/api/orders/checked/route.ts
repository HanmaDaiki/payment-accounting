import { getServerSession } from 'next-auth';
import { NextResponse, NextRequest } from 'next/server';
import authOptions from '@/lib/authOptions';
import prisma from '@/lib/prisma';

export async function PATCH(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const session = await getServerSession(authOptions);

  await prisma.order.update({
    where: {
      id: body.id,
      userId: session.user.id
    },
    data: {
      paymentState: body.paymentState
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