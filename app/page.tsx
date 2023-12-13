'use client'
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import Header from "@/components/Header";
import AddNewOrder from '@/components/AddNewOrder';
import ListOrder from "@/components/ListOrders";
import { TOrder } from '@/lib/TOrder';

export default function Home() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<TOrder[]>([]);

  async function getOrders() {
    const response = await fetch('/api/orders');
    const data = await response.json();

    if (data.orders) {
      setOrders(data.orders);
    }
  };

  
  useEffect(() => {
    if(session?.user) getOrders();
  }, [session]);


  return (
    <>
      <Header />
      <main className="flex flex-col gap-10">
        {
          session ?
            <>
              <AddNewOrder setOrders={setOrders} />
              <ListOrder setOrders={setOrders} orders={orders} />
            </> :
            <div className="w-full flex flex-col items-end">
              <Image src='/notAuth.png' width={150} height={100} alt="Not auth" priority />
            </div>
        }
      </main>
    </>
  )
}
