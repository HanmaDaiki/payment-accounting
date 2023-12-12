import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import authOptions from '@/lib/authOptions';

export async function GET() {
  const session = await getServerSession(authOptions);

  try {
    const data = await prisma.order.findMany({
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
    });

    return NextResponse.json({ orders: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const session = await getServerSession(authOptions);

  try {
    await prisma.order.create({
      data: {
        userId: session?.user?.id,
        name: body.name,
        price: Number(body.price)
      }
    })

    return NextResponse.json({ message: 'Order created!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}