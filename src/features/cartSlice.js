import {createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem
        ("cartItems")) : [],
    cartTotalQuantity:0 , 
    cartTotalAmount: 0 ,
}

const updateQuantity = (state, action) => {
    return state.cartItems.findIndex((item) => item.id === action.payload);
  }

const cartSlice = createSlice ({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){
           const itemIndex =  state.cartItems.findIndex(
            (item) => item.id === action.payload.id
            );
                if (itemIndex >= 0){
                    state.cartItems[itemIndex].cartQuantity +=1;
                    toast.info("increased product quanity", {
                        position: "bottom-left",
                    });
                } else{
                    const tempItem= {...action.payload, cartQuantity : 1}
                    state.cartItems.push(tempItem);
                    toast.success(`added product to cart`, {
                        position: "bottom-left",
                });
            }

            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + (item.cartQuantity * item.price), 0);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            },

            incrementQuantity(state, action) {
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
                state.cartItems[itemIndex].cartQuantity += 1;
            
                state.cartTotalQuantity += 1;
                state.cartTotalAmount += state.cartItems[itemIndex].price;
            
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },
            
            decrementQuantity(state, action) {
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
                state.cartItems[itemIndex].cartQuantity -= 1;
            
                state.cartTotalQuantity -= 1;
                state.cartTotalAmount -= state.cartItems[itemIndex].price;
            
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },

            clearCart (state){
                state.cartItems = [];
                state.cartTotalQuantity = 0;
                state.cartTotalAmount = 0;
                localStorage.removeItem("cartItems");
                toast.dismiss("items deleted", {
                    position: "bottom-left",
                })
                }
        }
    });

export const {addToCart, incrementQuantity, decrementQuantity,clearCart } = cartSlice.actions;

export default cartSlice.reducer;