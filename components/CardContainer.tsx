import { PropsWithChildren } from "react";

export default function CardContainer({children}: PropsWithChildren) {
  return <div className="bg-stone-100 w-[280px] min-h-[190px] rounded flex flex-col px-5 py-3 gap-2 shadow-xl">{children}</div>
}