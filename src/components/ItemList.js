import { useDispatch } from "react-redux";
import { ITEM_IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  // console.log(dummy, "inside item list component");

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action on the click of the button
    // console.log(e);
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        // console.log(item);
        return (
          <div
            data-testid="foodItems"
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2 px-3">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 rounded-sm relative">
              {item?.card?.info?.imageId && (
                <div className="relative">
                  <img
                    src={ITEM_IMAGE + item?.card?.info?.imageId}
                    alt="Image not available for the item"
                    className="w-full"
                  />
                  <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 bg-white shadow-lg rounded-lg">
                    <button onClick={() => handleAddItem(item)}>Add+</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
