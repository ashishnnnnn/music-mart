import { useFilter } from "../../context/FilterContext";
const category = [
  ["guitar", "Guitar"],
  ["drum", "Drum"],
  ["traditional-equipment", "Traditionals"],
  ["studio-equipment", "Studio-Equiments"],
];

const ratings = [4, 3, 2, 1];

export const Filters_view = () => {
  const { filter_state, setFilterState } = useFilter();
  return (
    <div className="column side-bar pad-1-5 pad-t-3 pad-b-5">
      <div className="flex jst-sp-sb ali-ce">
        <p className="fnt-1-2 fnt-w-800">Filters</p>
        <a
          onClick={() => {
            setFilterState({ type: "clear_filter" });
          }}
          className="clear-filter"
        >
          <p>Clear All</p>
          <div className="very-thin-bor hundred-w"></div>
        </a>
      </div>
      <div className="spacer"></div>
      <div className="flex-center-column ali-st gap-1">
        <label className="fnt-1-2">
          <p>
            Price <span className="fnt-w-600">1000</span> to{" "}
            <span className="fnt-w-600">{filter_state.price}</span>
          </p>
          <input
            type="range"
            min="1000"
            max="30000"
            value={filter_state.price}
            step="100"
            className="slider cursor-pointer"
            onChange={(e) => {
              setFilterState({ type: "price", paylod: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="spacer"></div>
      <div className="flex-center-column ali-st gap-0-8">
        <div className="fnt-1 fnt-w-600">Category</div>
        {category.map((ele) => (
          <label
            className="custom-checkbox flex-center-row gap-0-8"
            tab-index="0"
            aria-label="Another Label"
            onChange={() => {
              setFilterState({ type: "category", paylod: ele[0] });
            }}
          >
            <input
              type="checkbox"
              checked={filter_state.category.includes(ele[0])}
            />
            <span className="checkmark"></span>
            <span className="label fnt-1-2">{ele[1]}</span>
          </label>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="flex-center-column ali-st gap-0-8">
        <div className="fnt-1 fnt-w-600">Ratings</div>
        {ratings.map((ele) => (
          <label
            className="radio flex-center-row gap-0-5"
            onChange={() => {
              setFilterState({
                type: "rating",
                paylod: ele,
              });
            }}
          >
            <input
              type="radio"
              name="ratings"
              id="my_radio"
              className="radio__input"
              checked={filter_state.rating === ele}
            />
            <div className="radio__radio pad-2px"></div>
            {ele} Stars & Above
          </label>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="flex-center-column ali-st gap-0-8">
        <div className="fnt-1 fnt-w-600">Sort-By</div>
        <label
          onChange={(e) => {
            setFilterState({ type: "sortby", paylod: e.target.value });
          }}
          className="radio flex-center-row gap-0-5"
        >
          <input
            type="radio"
            name="sort-by"
            id="my_radio"
            className="radio__input"
            value="Low_to_high"
            checked={filter_state.sortby === "Low_to_high"}
          />
          <div className="radio__radio pad-2px"></div>
          Low to High
        </label>
        <label
          onChange={(e) => {
            setFilterState({ type: "sortby", paylod: e.target.value });
          }}
          className="radio flex-center-row gap-0-5"
        >
          <input
            type="radio"
            name="sort-by"
            id="my_radio"
            className="radio__input"
            value="High_to_low"
            checked={filter_state.sortby === "High_to_low"}
          />
          <div className="radio__radio pad-2px"></div>
          High to Low
        </label>
      </div>
    </div>
  );
};
