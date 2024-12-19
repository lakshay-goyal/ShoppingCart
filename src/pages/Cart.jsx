import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between w-full p-4 gap-8">
          <div className="md:w-[60%] flex flex-col gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="md:w-[40%] mt-5 md:mt-0">
            <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between rounded-xl shadow-md bg-white">
              <div className="flex flex-col gap-4">
                <div className="font-semibold text-xl text-green-800">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">
                  <span className="text-gray-700">Total Amount:</span>{" "}
                  <span className="text-green-700">${totalAmount.toFixed(2)}</span>
                </p>
                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg px-8 py-3 uppercase transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;