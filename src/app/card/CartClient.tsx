"use client";
import { useCart } from "@/hooks/useCart";
import Heading from "../components/products/Heading";
import ProductCard from "../components/products/ProductCard";
import { CartProductType } from "../product/[productId]/ProductDetails";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import Button from "../components/Button";
import ItemContent from './itemCartContent';

const CardClient = () => {
  const { CartProducts } = useCart();
  if (!CartProducts || CartProducts.length === 0)
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1 mt-2 "
          >
            <MdArrowBack />
            <span> Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  return (
    <div>
      <div>
        <Heading title="Shopping Cart" center />
      </div>
      <div
        className="grid 
                            grid-cols-5
                            text-xs
                            gap-4
                            pb-2
                            items-center"
      >
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-cenyter">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {CartProducts &&
          CartProducts.map((item) => {
            return(<ItemContent key={item.id} item={item} />)
     
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <Button label="Clear Cart" onClick={() => {}} small outline />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div>
            <div className="flex justify-between w-full text-base font-semibold">
              <span> Subtotal</span>
              <span> $90</span>
            </div>

            <p>Taxes and Shipping calculate at checkout </p>
            <Button label="Checkout" onClick={() => {}} />
            <Link
              href={"/"}
              className="
          text-slate-500 flex items-center gap-1 mt-2 "
            >
              <MdArrowBack />
              <span> Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
