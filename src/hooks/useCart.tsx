'use client'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CartProductType } from "../app/product/[productId]/ProductDetails";
import { toast } from "react-hot-toast";
import { product } from "@/utils/product";
import { products } from '../utils/products';

type cartContextType = {
  cartTotalQty: number;
  CartProducts: CartProductType[] | null;
  addProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyInc: (product: CartProductType) => void;
};
export const CartContext = createContext<cartContextType | null>(null);

interface props {
  [propName: string]: any;
}
export const CartContextProvider = (props: props) => {
  const [cartTotalQty, selectTotalQty] = useState(0);
  const [CartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const lastAddedProductRef = useRef<number | null>(null);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("EshopCartItems");
    const cProds: CartProductType[] | null = JSON.parse(cartItems);

    setCartProducts(cProds);
  }, []);

  const addProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      const now = Date.now();
      if (
        !lastAddedProductRef.current ||
        now - lastAddedProductRef.current > 1000
      ) {
        toast.success("Product added to cart");
        lastAddedProductRef.current = now;
      }

      localStorage.setItem("EshopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback((
    product: CartProductType
  ) => {
    if (CartProducts) {
      const filtredProducts = CartProducts.filter((item) => {
        return item.id !== product.id;
      })
      setCartProducts(filtredProducts)
      toast.success("Product removed from cart");
      localStorage.setItem("EshopCartItems", JSON.stringify(filtredProducts));
      
    }
  }, [CartProducts])
  
  const handleCartQtyInc = useCallback((product: CartProductType) => {
    let updatedCart;
    if (product.quantity === 99) {
       return toast.error("Maxium reached")
    }
      if (CartProducts) {
        updatedCart = [...CartProducts];
         const existingIndex = CartProducts.findIndex(
           (item) => item.id === product.id)
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
        }
    }
    
     
    
},[CartProducts])
  const value = {
    cartTotalQty,
    CartProducts,
    addProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyInc 
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null)
    throw new Error("useCart must be used within a CartContextProvider");

  return context;
};
