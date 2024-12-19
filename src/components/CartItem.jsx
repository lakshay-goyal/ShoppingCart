import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center p-5 justify-between bg-white rounded-xl mt-2 mb-2 gap-8 shadow-md hover:shadow-lg transition duration-200">
      <div className="flex items-center gap-6">
        <div className="w-[180px] h-[180px] flex items-center justify-center">
          <img src={item.image} className="w-full h-full object-contain" alt={item.title} />
        </div>
        <div className="flex flex-col gap-4 w-[450px]">
          <h1 className="text-xl font-semibold text-gray-700">{item.title}</h1>
          <p className="text-sm text-gray-500">{item.description.split(" ").slice(0, 15).join(" ")}...</p>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <button
              className="bg-red-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-400 transition duration-300"
              onClick={removeFromCart}
            >
              <FcDeleteDatabase className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;