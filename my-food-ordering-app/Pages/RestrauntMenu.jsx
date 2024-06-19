import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { MENU_LIST_API } from "../utils/api";
import MenuCategory from "../MenuPages/MenuCategory";

const RestrauntMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [MenuData, setMenuData] = useState([]);
  const [showIndex, setShowIndex] = useState(null);
  const [resDetails,setResDetails]=useState([])
  const upadteId = () => {
    return `${MENU_LIST_API}${id}`;
  };


  const fetcdata = async () => {
    let data = await fetch(upadteId());
    let ans = await data.json();
    setMenuData(
      // ans.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards
      ans.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setResDetails(ans?.data?.cards[2].card.card.info)
    
  };
console.log(resDetails)


  const Categories = MenuData.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


  useEffect(() => {
    fetcdata();
  }, [id]);
  return (
    <div className="text-center">
      {Categories.map((c, index) => (
        <MenuCategory
          data={c.card.card}
          key={c.card.card.title}
          ShowItems={index == showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
