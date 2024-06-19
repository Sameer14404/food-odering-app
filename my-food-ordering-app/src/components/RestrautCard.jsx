import { IMG_DATA } from "../../utils/image";

const RestrauntCard = ({ data }) => {
  const { info } = data;
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } = info;

  // Generate star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-orange-100 rounded-2xl p-5 shadow-lg transform transition duration-300 hover:scale-105">
      <img
        src={`${IMG_DATA}${cloudinaryImageId}`}
        alt={name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <h4 className="text-sm text-gray-700 mb-2">{cuisines.join(", ")}</h4>
      <div className="flex items-center mb-2">
        {renderStars(Math.round(avgRating))}
        <span className="ml-2 text-sm font-semibold text-gray-700">
          {avgRating}
        </span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900">{costForTwo}</h4>
    </div>
  );
};

export default RestrauntCard;
