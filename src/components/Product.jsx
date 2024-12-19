import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col justify-between w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg 
    hover:scale-105 transition-all duration-300 p-4 group relative">
      {/* Product Image */}
      <div className="w-full h-[200px] mb-4">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-gray-700 dark:text-gray-200 font-semibold text-lg mb-2">
          {post.title.length > 42 ? `${post.title.substring(0, 42)}...` : post.title}
        </h2>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-justify">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>

        {/* Price and Cart Button */}
        <div className="flex justify-between items-center mt-auto">
          <p className="text-green-600 dark:text-green-400 font-bold text-xl">
            ${post.price}
          </p>
          
          {cart.some((p) => p.id === post.id) ? (
            <button
              className="text-white bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 
              rounded-full font-semibold text-sm px-4 py-2 transition duration-300"
              onClick={removeFromCart}
            >
              Remove
            </button>
          ) : (
            <button
              className="text-white bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 
              rounded-full font-semibold text-sm px-4 py-2 transition duration-300"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;