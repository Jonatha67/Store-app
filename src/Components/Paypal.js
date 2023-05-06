import { PayPalClient } from "@paypal/checkout-server-sdk";
import { PayPalButton } from "@paypal/checkout-components";

const payPalClient = new PayPalClient({
  clientId: "process.env.REACT_APP_CLIENT_ID",
  clientSecret: "process.env.REACT_APP_SECRET_KEY",
  mode: "sandbox",
});

const Paypal = () => {
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const createOrder = async (data, actions) => {
    try {
      // Call the PayPal API to create a new order
      const response = await payPalClient.execute(
        new orders.OrdersCreateRequest({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: cartTotalAmount.toFixed(2),
              },
            },
          ],
        })
      );
      // Return the order ID to the PayPalButton component
      return response.result.id;
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      toast.error("An error occurred while creating the order");
    }
  };

  const onApprove = async (data, actions) => {
    try {
      // Call the PayPal API to capture the approved payment
      const response = await payPalClient.execute(
        new orders.OrdersCaptureRequest(data.orderID)
      );
      // The payment was successful, clear the cart and show a success message
      dispatch(clearCart());
      toast.success("Payment successful");
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      toast.error("An error occurred while capturing the payment");
    }
  };

  return (
    <div>
      {/* ... */}
      <PayPalButton createOrder={createOrder} onApprove={onApprove} />
    </div>
  );
};

export default Paypal;

