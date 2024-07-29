import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const { listOfRestaurant, setListofRestaurant, backupRestaurant } =
    useRestaurant();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log(RestaurantCardPromoted);

  function filteredRestaurant(e) {
    const filterEntries = listOfRestaurant.filter((restaurant) => {
      return restaurant.info.avgRating > 4;
    });
    setListofRestaurant(filterEntries);
  }

  function inputCapture(e) {
    setSearchInput(e.target.value);
  }

  function filterSearch(e) {
    let copiedRestaurant = [...backupRestaurant];
    let result = copiedRestaurant.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setListofRestaurant(result);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center m-20">
        <h1>
          Look like you're offline!! please check your internet connection and
          try again
        </h1>
      </div>
    );
  }

  const { setUserName, loggedInUser } = useContext(UserContext);
  // console.log(setUserName, "inside body");

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchInput}
            onChange={(e) => inputCapture(e)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={(e) => filterSearch(e)}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-2 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={(e) => filteredRestaurant(e)}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-4 p-4">
          <label>UserName: </label>
          <input
            className="border border-black my-6 p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurant?.map((resObj) => {
          // console.log(resObj);
          return (
            <Link to={"restaurants/" + resObj.info.id} key={resObj.info.id}>
              {resObj.info.promoted ? (
                <RestaurantCardPromoted resData={resObj} />
              ) : (
                <RestaurantCard resData={resObj} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
