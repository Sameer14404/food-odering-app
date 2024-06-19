import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/image";
import { addItem } from "../Redux-store/cartSlice";

const ItemCards = ({ data }) => {
  const { name, category, defaultPrice, price, description, imageId } = data;
  const finalPrice = (defaultPrice ? defaultPrice : price) / 100;
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(addItem(data));
  };

  return (
    <div className="p-4 m-4 bg-yellow-100 flex flex-col justify-between items-center w-full max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <div className="flex-1 m-2 text-center">
        <h2 className="text-xl font-bold text-red-700 mb-2">{name}</h2>
        <span className="text-gray-800 text-lg font-semibold mb-2 block">₹{finalPrice}</span>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="relative w-40 h-40 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <img
          src={`${MENU_IMG}${imageId}`}
          alt={name}
          className="w-full h-full rounded-lg object-cover"
        />
        <button
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 absolute bottom-0 left-0"
          onClick={() => handleClick(data)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemCards;
