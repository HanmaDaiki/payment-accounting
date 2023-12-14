'use client'
import { useState } from "react";
import CardContainer from "./CardContainer";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import { TOrder } from "@/lib/TOrder";

type Props = {
  setOrders: (array: TOrder[]) => void;
}

export default function AddNewOrder({ setOrders }: Props) {
  const [nameOrder, setNameOreder] = useState('');
  const [priceOrder, setPriceOrder] = useState('');

  async function createOrder(event: React.SyntheticEvent) {
    event.preventDefault();
    const body = JSON.stringify({
      name: nameOrder,
      price: priceOrder
    });

    const response = await fetch('/api/orders', {
      method: 'POST',
      body,
    });
    const data = await response.json();

    setOrders(data.orders);

    setNameOreder('');
    setPriceOrder('');
  }


  return (
    <CardContainer>
      <form onSubmit={createOrder} className='flex flex-col w-full gap-2'>
        <h1 className="text-2xl">Добавить заказ</h1>
        <MyInput required value={nameOrder} onChange={(e) => setNameOreder(e.target.value)} placeholder="Название услуги" />
        <MyInput required value={priceOrder} onChange={(e) => setPriceOrder(e.target.value)} placeholder="Цена за услугу" type="number" />
        <MyButton type="submit" color="blue">Создать</MyButton>
      </form>
    </CardContainer>
  );
}