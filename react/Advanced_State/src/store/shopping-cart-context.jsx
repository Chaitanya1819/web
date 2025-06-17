import { createContext } from "react";
import { addItem } from "../../../../plant-shop/src/redux/cartSlice";

export const CartContext = createContext({
    items:[],
    addItemToCart: () =>{},
});

