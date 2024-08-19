"use client";
import { formatPrice } from "@/utils/formatPrice";
import { trunCateText } from "@/utils/truncateText";
import Image from "next/image";
import {Rating } from "@mui/material"
import { useRouter } from "next/navigation";
interface ProductCardProps {
//   data: {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     brand: string;
//     category: string;
//     inStock: boolean;
//     images: {
//       color: string;
//       colorCode: string;
//       image: string;
//     }[];
//     reviews: {
//       id: string;
//       userId: string;
//       productId: string;
//       rating: number;
//       comment: string;
//       createdDate: string;
//       user: {
//         id: string;
//         name: string;
//         email: string;
//         emailVerified: string | null;
//         image: string;
//         hashedPassword: string | null;
//         createdAt: string;
//         updatedAt: string;
//         role: string;
//       };
//     }[];
  //};
  data:any
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const imageUrl = data?.images?.[0]?.image || 'path/to/default/image.jpg';
  const name = data?.name || 'Default Name';

  const router=useRouter();
  const ProductRating=data.reviews.reduce
   ((acc:number,item:any)=>item.rating+acc,0)/data.reviews.length

  return (
    <div
    onClick={()=>router.push(`/product/${data.id}`)}
     className="col-span-1
           cursor-pointer
           border-[1.2px]
           border-slate-200
           bg-slate-50
           round-sm
           p-2
           transition
           hover:scale-105
           text-center
           text-sm
         "> 
      <div className="
          flex flex-col 
          items-center
          w-full
          gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{trunCateText(name)}</div>
        <div className="mt-1">{data.reviews.length} reviews</div>
        <div className="mt-1 font-semibold">{formatPrice(data.price)} </div>
        <Rating className="mt-1" value={ProductRating}></Rating>
      </div>
    </div> 
  );
}

export default ProductCard;
