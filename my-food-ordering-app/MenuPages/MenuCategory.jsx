import { useState } from "react";
import ItemCards from "./ItemCard";

const MenuCategory = ({ data, ShowItems, setShowIndex }) => {
  const { title, itemCards } = data;
  const [toggle, setToggle] = useState(false);

  const ClickedButton = () => {
    setShowIndex();
    setToggle(!toggle);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="m-5 p-5 bg-slate-100 shadow-lg flex justify-between items-center cursor-pointer" onClick={ClickedButton}>
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span className="text-lg">⬇️</span>
      </div>
      {ShowItems && toggle ? (
        <div className="p-5 m-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {itemCards?.map((el) => (
            <ItemCards key={el.card.info.id} data={el.card.info} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MenuCategory;

