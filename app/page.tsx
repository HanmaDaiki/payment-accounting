import Header from "@/components/Header";
import AddNewOrder from '@/components/AddNewOrder';
import ListOrder from "@/components/ListOrders";

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex flex-col gap-10">
        <AddNewOrder />
        <ListOrder />
      </main>
    </>
  )
}
