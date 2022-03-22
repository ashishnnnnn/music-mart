import "./Mobile_filter.css";
import { useState } from "react";
import { useFilter } from "../../context/FilterContext";
const category = [
  ["guitar", "Guitar"],
  ["drum", "Drum"],
  ["traditional-equipment", "Traditionals"],
  ["studio-equipment", "Studio-Equiments"],
];

const ratings = [4, 3, 2, 1];

export const Mobile_filter = () => {
  const [show_sort, setshow_sort] = useState(false);
  const [show_filter, setshow_filter] = useState(false);
  const { filter_state, setFilterState } = useFilter();
  return (
    <div className="hidden-code">
      <div className="filters z-ind-1 flex">
        <a
          onClick={() => {
            setshow_sort((state) => !state);
          }}
          className="ele flex-center-row sort fnt-1-2 pad-1"
        >
          Sort
        </a>
        <div className="divider"></div>
        <a
          onClick={() => {
            setshow_filter((state) => !state);
          }}
          className="ele flex-center-row cate-filter fnt-1-2 pad-1"
        >
          Filter
        </a>
      </div>
      {show_sort && (
        <div className="sort-options pad-2 flex-column  z-ind-3">
          <div className="flex jst-sp-sb pad-1">
            <div className="fnt-1-2">Sort By</div>
            <a
              onClick={() => {
                setshow_sort((state) => !state);
              }}
            >
              <i className="fnt-1-2 fas fa-times"></i>
            </a>
          </div>
          <div className="hr-line"></div>
          <a
            onClick={() => {
              setFilterState({ type: "SORTBY", paylod: "Low_to_high" });
            }}
            className="click fnt-1-2 pad-1"
          >
            Low To High
          </a>
          <a
            onClick={() => {
              setFilterState({ type: "SORTBY", paylod: "High_to_low" });
            }}
            className="click fnt-1-2 pad-1"
          >
            High Low
          </a>
        </div>
      )}
      {show_filter && (
        <div className="filter-options pad-2 flex-column z-ind-2">
          <div className="flex jst-sp-sb ali-ce">
            <p className="fnt-1-2 fnt-w-800">Filters</p>
            <a
              onClick={() => {
                setFilterState({ type: "CLEAR_FILTER" });
              }}
              className="clear-filter"
            >
              <p>Clear All</p>
              <div className="very-thin-bor hundred-w"></div>
            </a>
          </div>
          <div className="spacer"></div>
          <div className="flex-center-column ali-st gap-0-8">
            <div className="fnt-1 fnt-w-600">Category</div>
            {category.map((ele, index) => (
              <label
                key={index}
                className="custom-checkbox flex-center-row gap-0-8"
                tab-index="0"
                aria-label="Another Label"
              >
                <input
                  onChange={() => {
                    setFilterState({ type: "CATEGORY", paylod: ele[0] });
                  }}
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
            {ratings.map((ele, index) => (
              <label key={index} className="radio flex-center-row gap-0-5">
                <input
                  onChange={() => {
                    setFilterState({
                      type: "RATING",
                      paylod: ele,
                    });
                  }}
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
          <a
            onClick={() => {
              setshow_filter((state) => !state);
            }}
            className="apply flex-center-column fnt-1-5 pad-tb-1"
          >
            Close Filter
          </a>
        </div>
      )}
    </div>
  );
};
