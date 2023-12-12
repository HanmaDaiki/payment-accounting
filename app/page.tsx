'use client'
import { useSession } from "next-auth/react";
import Image from 'next/image';
import Header from "@/components/Header";
import AddNewOrder from '@/components/AddNewOrder';
import ListOrder from "@/components/ListOrders";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <main className="flex flex-col gap-10">
        {
          session ?
            <>
              <AddNewOrder />
              <ListOrder />
            </> :
            <div className="w-full flex flex-col items-end">
              <Image src='/notAuth.png' width={150} height={100} alt="Not auth" priority /> 
            </div>
        }


      </main>
    </>
  )
}
