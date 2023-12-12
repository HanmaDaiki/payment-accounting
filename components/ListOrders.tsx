'use client'
import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import MyInput from "./MyInput";

type Order = {
  id: string,
  name: string,
  price: number,
  createAt: string,
  paymentState: boolean,
}

export default function ListOrder() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  async function getOrders() {
    const response = await fetch('/api/orders');
    const data = await response.json();
    setOrders(data.orders);
    setLoading(false);
  };

  useEffect(() => {
    getOrders();
  }, [])

  if (loading) {
    return null;
  }

  return (
    <ul className="flex gap-5 wrap">
      {
        orders.map((order) => {
          const date = new Date(order.createAt);

          return <li key={order.id}>
            <CardContainer>
              <h1><span className="font-bold">Name order:</span>  {order.name}</h1>
              <p>
                <span className="font-bold">Price:</span>  {order.price}
              </p>
              <p>
                <span className="font-bold">
                  Created At:</span> {date.getDay()}.{date.getMonth()}.{date.getFullYear()}
              </p>
              <p>
                <span className="font-bold">Time:</span>  {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
              </p>
              <label className="flex gap-2">
                <MyInput type="checkbox" checked={order.paymentState} />
                paid?
              </label>
            </CardContainer>
          </li>
        })
      }

    </ul>
  );
}