"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  product: any;
}
const Horizontal = () => {
  return <hr className="w-[30%] my-2 " />;
};

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addProductToCart, CartProducts } = useCart();
  const [IsProductInCart, setIsProductInCart] = useState(false);

  const [CartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const router = useRouter();
  console.log(CartProducts);
  useEffect(() => {
    setIsProductInCart(false);
    if (CartProducts) {
      const existingIndex = CartProducts.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [CartProducts]);

  const ProductRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [CartProduct.selectedImg]
  );
  console.log(CartProduct);

  const handleQtyDec = useCallback(() => {
    if (CartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [CartProduct]);

  const handleQtyInc = useCallback(() => {
    if (CartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [CartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={CartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={ProductRating} readOnly></Rating>
          <div>{product.reviews.length}</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY : </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND : </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-red-400"}>
          {" "}
          {product.inStock ? "In stock" : "Out fo stock"}
        </div>
        <Horizontal />
        {IsProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex -items-center gap-1">
              <MdCheckCircle
                className="text-teal-400
                          "
                size={20}
              />
              <span>Product added to cart</span>
            </p>
            <div className="max-w-[300px] mt-2">
              <Button
                label="View cart"
                outline
                onClick={() => {
                  router.push("/card");
                }}
              ></Button>
            </div>
          </>
        ) : (
          <>
            <SetColor
              cartProdut={CartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <SetQuantity
              cartProduct={CartProduct}
              handleQtyDec={handleQtyDec}
              handleQtyInc={handleQtyInc}
            />
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => addProductToCart(CartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
