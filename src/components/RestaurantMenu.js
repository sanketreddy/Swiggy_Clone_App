import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const dummy = "Dummy Data";

  if (resInfo === null) {
    return <RestaurantMenuShimmer />;
  }

  const { text } = resInfo?.cards[0]?.card?.card;
  const { cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) => {
        return (
          category?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-2xl">{text}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {categories?.map((category, index) => {
          // console.log(index);
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => {
                // console.log(index);
                setShowIndex(index === showIndex ? null : index);
              }}
              dummy={dummy}
              // showItems={index === 0 && true}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
