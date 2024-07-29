import { RESTAURANT_LIST_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [listOfRestaurant, setListofRestaurant] = useState([]);
  const [backupRestaurant, setBackupRestaurant] = useState([]);

  // console.log(
  //   listOfRestaurant,
  //   "getting the res info inside the custom res hook"
  // );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(RESTAURANT_LIST_API);
    const jsonData = await data.json();
    setListofRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setBackupRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return {
    listOfRestaurant,
    setListofRestaurant,
    backupRestaurant,
  };
};

export default useRestaurant;
