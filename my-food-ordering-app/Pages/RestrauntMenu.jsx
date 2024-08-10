import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LIST_API } from "../utils/api";
import MenuCategory from "../MenuPages/MenuCategory";

const RestrauntMenu = () => {
  const { id } = useParams();
  const [MenuData, setMenuData] = useState([]);
  const [showIndex, setShowIndex] = useState(null);
  const [resDetails, setResDetails] = useState([]);

  // Function to construct the menu list API URL
  const updateId = () => {
    return MENU_LIST_API(id); // Call the function with the id
  };

  const fetcdata = async (id) => {
    try {
      // Fetch data using the generated URL with the correct restaurant ID
      let response = await fetch(updateId()); // Call the updateId function to get the URL

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let ans = await response.json();

      // Safely access the menu data using optional chaining
      const menuData = ans.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const restaurantDetails = ans?.data?.cards?.[2]?.card?.card?.info;

      // Set the menu data and restaurant details if available
      if (menuData) {
        setMenuData(menuData);
      } else {
        console.error('Failed to retrieve menu data.');
      }

      if (restaurantDetails) {
        setResDetails(restaurantDetails);
      } else {
        console.error('Failed to retrieve restaurant details.');
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  // Filter categories from menu data
  const Categories = MenuData.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  useEffect(() => {
    fetcdata(id); // Pass id to fetcdata when the component mounts or id changes
  }, [id]);

  return (
    <div className="text-center">
      {Categories.map((c, index) => (
        <MenuCategory
          data={c.card.card}
          key={c.card.card.title}
          ShowItems={index === showIndex}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
