'use client'
import { useState } from "react";
import CardContainer from "./CardContainer";
import MyButton from "./MyButton";
import MyInput from "./MyInput";

export default function AddNewOrder() {
  const [nameOrder, setNameOreder] = useState('');
  const [priceOrder, setPriceOrder] = useState('');

  async function createOrder(event: React.SyntheticEvent) {
    event.preventDefault();
    const body = JSON.stringify({
      name: nameOrder,
      price: priceOrder
    });

    await fetch('/api/orders', {
      method: 'POST',
      body,
    })

    setNameOreder('');
    setPriceOrder('');
  }


  return (
    <CardContainer>
      <form onSubmit={createOrder} className='flex flex-col w-full gap-2'>
        <h1 className="text-2xl">Add new order</h1>
        <MyInput required value={nameOrder} onChange={(e) => setNameOreder(e.target.value)} placeholder="Name order" />
        <MyInput required value={priceOrder} onChange={(e) => setPriceOrder(e.target.value)} placeholder="Price" type="number" />
        <MyButton type="submit" color="blue">Add new Order</MyButton>
      </form>
    </CardContainer>
  );
}