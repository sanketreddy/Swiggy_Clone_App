import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // console.log(props, "inside the restaurant card");
  // console.log(props.resData);
  let { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props?.resData?.info;

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        src={LOGO_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// HOC are functions that take one component as an argument and return another component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // console.log(props, "inside the restaurant card with promoted label");
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
