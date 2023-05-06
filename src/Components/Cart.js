import React from "react";
import { useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, clearCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

const Cart = () => {

    const dispatch = useDispatch()

const increment = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };
  
  const decrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const empty = () => {
    dispatch(clearCart());
  }

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const handleOrderApproval = (data, actions) => {
    toast.success(`order completed`, {
        position: "bottom-left",
})
    empty();
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold">Cart</h1>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="text-left">Product</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Price</th>
            <th className="text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="py-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 mr-4"
                />
                {item.title}
              </td>
              <td className="py-2">
              <button className="mr-3"onClick={() => decrement(item.id)}>-</button>
              {item.cartQuantity}
              <button className="ml-2" onClick={() => increment(item.id)}>+</button>
              </td>
              <td className="py-2">${item.price}
              </td>
              <td className="py-2">${item.cartQuantity * item.price}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-right font-semibold py-2">
              Total
            </td>
            <td className="font-semibold py-2">${cartTotalAmount}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
      Checkout
    </button>
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_CLIENT_ID }}>
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: cartTotalAmount.toString(),
                  },
                },
              ],
            });
          }}
          onApprove={handleOrderApproval}
        />
      </PayPalScriptProvider>
    <button className="bg-gray-500 text-white px-4 py-2 rounded ml-4" onClick={empty}>
      Clear Cart
    </button>
  </div>
</div>
  );
};

export default Cart;
