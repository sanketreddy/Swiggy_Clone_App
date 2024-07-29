import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log(showItems);
  const { title, itemCards } = data;

  function toggleAccordion() {
    setShowIndex();
  }

  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => toggleAccordion()}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accordion Body */}
        {showItems === true && <ItemList items={itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
