
'use client'

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQuantityProps{
    cartCounter?:boolean,
    cartProduct:CartProductType,
    handleQtyInc:()=>void,
    handleQtyDec:()=>void,
}
const BtnStyles='border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity:React.FC<SetQuantityProps> = ({
    cartCounter,
    cartProduct,
    handleQtyInc,
    handleQtyDec

}) => { 
    return ( 
        <div className="flex gap-8 items-center ">
            {
                cartCounter ? null : <div className="font-semibold">QUANTITY:</div>
            }
  <div className="flex  gap-4 items-center text-base">
    
    <button onClick={handleQtyDec} className={BtnStyles}>-</button>
    <div>{cartProduct.quantity}</div>
    <button onClick={handleQtyInc} className={BtnStyles}>+</button>
    
  </div>
        </div>
      
     );
}
 
export default SetQuantity;