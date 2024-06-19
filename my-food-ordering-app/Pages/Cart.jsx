import { useDispatch, useSelector } from "react-redux";
import { MENU_IMG } from "../utils/image";
import { removeItem } from "../Redux-store/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  let total = 0;

  cart.forEach((item) => {
    total += +(item.price ? item.price : item.defaultPrice) / 100;
  });

  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27l5.18 3.73-1.64-5.81L20 10.24h-6.11L12 4.5l-1.89 5.74H4l4.45 4.95L6.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <h1 className="p-12 font-bold text-lg">Your cart is empty.</h1>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-4"
            >
              <img
                src={`${MENU_IMG}${item.imageId}`}
                alt={item.name}
                className="w-full md:w-1/4 lg:w-17 h-17 rounded-lg object-cover mb-4 md:mb-0"
              />
              <div className="flex-1 md:ml-4 text-center md:text-left">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-center md:justify-start items-center mb-2">
                  {renderStars(Math.floor(item.ratings.aggregatedRating.rating))}
                  <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
                </div>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <span className="text-lg font-bold">
                    ₹{+(item.price ? item.price : item.defaultPrice) / 100}
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Total: ₹{total}</h2>
          <div className="flex w-full justify-between max-w-xs">
            {/* <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Checkout
            </button> */}
            <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 

export default Cart;
