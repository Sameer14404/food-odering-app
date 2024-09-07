import { useState, useEffect } from "react";
import RestrauntCard from "./RestrautCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAIN_API } from "../../utils/api";

const Body = () => {
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   let ans = await fetch(MAIN_API);
  //   let data = await ans.json();
  //   setData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  //   setFilterData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  // };
  const getData = async () => {
    try {
      let response = await fetch(MAIN_API,);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let data = await response.json();
      let jsonData = JSON.parse(data.contents);
      const restaurants = jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
      if (restaurants) {
        setData(restaurants);
        setFilterData(restaurants);
      } else {
        console.error('Failed to retrieve restaurant data.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  const filterSearch = () => {
    let ans = data.filter((el) =>
      el.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterData(ans);
  };

  const filterRated = () => {
    let ans = data.filter((el) => el.info.avgRating >= 4);
    setFilterData(ans);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="shimmer-cont">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 min-h-screen p-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <button
          className="bg-red-500 text-white font-semibold rounded-lg p-2 mb-2 md:mb-0 md:mr-2 hover:bg-red-600 transition duration-200"
          onClick={filterRated}
        >
          Top Rated Restaurant
        </button>
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="text"
            className="border-2 border-black rounded-lg p-2 mb-2 md:mb-0 md:mr-2"
            placeholder="Search Restaurants"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-gray-200 text-black font-semibold rounded-lg p-2 hover:bg-gray-300 transition duration-200"
            onClick={filterSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-orange-200 shadow-md rounded-lg">
        {filterData.map((el) => (
          <Link to={`/restraunt/${el.info.id}`} key={el.info.id}>
            <RestrauntCard data={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
