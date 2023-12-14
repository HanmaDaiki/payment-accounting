'use client'
import CardContainer from "./CardContainer";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import { TOrder } from '@/lib/TOrder';

type Props = {
  orders: TOrder[];
  setOrders: (array: TOrder[]) => void;
}

export default function ListOrder({ orders, setOrders }: Props) {
  async function deleteOrderById(id: string) {
    const body = JSON.stringify({ id });
    const response = await fetch('/api/orders/remove', {
      method: 'DELETE',
      body,
    });
    const data = await response.json();

    setOrders(data.orders);
  }

  async function toggleChecked(id: string, paymentState: boolean) {
    const body = JSON.stringify({ id, paymentState });
    const response = await fetch('/api/orders/checked', {
      method: 'PATCH',
      body,
    });
    const data = await response.json();

    setOrders(data.orders);
  };

  return (
    <ul className="flex gap-5 flex-wrap">
      {
        orders.map((order) => {
          const date = new Date(order.createAt);

          return <li key={order.id}>
            <CardContainer>
              <h1><span className="font-bold">Услуга:</span>  {order.name}</h1>
              <p>
                <span className="font-bold">Цена:</span>  {order.price}
              </p>
              <p>
                <span className="font-bold">
                  Дата:</span> {date.getDay()}.{date.getMonth()}.{date.getFullYear()}
              </p>
              <p>
                <span className="font-bold">Время:</span>  {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
              </p>
              <label className="flex gap-2">
                <MyInput type="checkbox" checked={order.paymentState} onChange={() => toggleChecked(order.id, !order.paymentState)} />
                Оплата пришла?
              </label>

              <MyButton color='red' onClick={() => deleteOrderById(order.id)}>Удалить</MyButton>
            </CardContainer>
          </li>
        })
      }

    </ul>
  );
}