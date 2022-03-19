import "./Mobile_filter.css";
import { useState } from "react";
import { useFilter } from "../../context/FilterContext";

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
              console.log("Clicked");
              setFilterState({ type: "sortby", paylod: "Low_to_high" });
            }}
            className="click fnt-1-2 pad-1"
          >
            Low To High
          </a>
          <a
            onClick={() => {
              setFilterState({ type: "sortby", paylod: "High_to_low" });
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
                setFilterState({ type: "clear_filter" });
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
            <label
              className="custom-checkbox flex-center-row gap-0-8"
              tab-index="0"
              aria-label="Checkbox Label"
              onChange={() => {
                setFilterState({ type: "category", paylod: "guitar" });
              }}
            >
              <input
                type="checkbox"
                checked={filter_state.category.includes("guitar")}
              />
              <span className="checkmark"></span>
              <span className="label fnt-1-2">Guitar</span>
            </label>

            <label
              className="custom-checkbox flex-center-row gap-0-8"
              tab-index="0"
              aria-label="Another Label"
              onChange={() => {
                setFilterState({ type: "category", paylod: "drum" });
              }}
            >
              <input
                type="checkbox"
                checked={filter_state.category.includes("drum")}
              />
              <span className="checkmark"></span>
              <span className="label fnt-1-2">Drum</span>
            </label>

            <label
              className="custom-checkbox flex-center-row gap-0-8"
              tab-index="0"
              aria-label="Checkbox Label"
              onChange={() => {
                setFilterState({
                  type: "category",
                  paylod: "traditional-equipment",
                });
              }}
            >
              <input
                type="checkbox"
                checked={filter_state.category.includes(
                  "traditional-equipment"
                )}
              />
              <span className="checkmark"></span>
              <span className="label fnt-1-2">Traditionals</span>
            </label>

            <label
              className="custom-checkbox flex-center-row gap-0-8"
              tab-index="0"
              aria-label="Checkbox Label"
              onChange={() => {
                setFilterState({
                  type: "category",
                  paylod: "studio-equipment",
                });
              }}
            >
              <input
                type="checkbox"
                checked={filter_state.category.includes("studio-equipment")}
              />
              <span className="checkmark"></span>
              <span className="label fnt-1-2">Studio-Equipments</span>
            </label>
          </div>
          <div className="spacer"></div>
          <div className="flex-center-column ali-st gap-0-8">
            <div className="fnt-1 fnt-w-600">Ratings</div>
            <label
              className="radio flex-center-row gap-0-5"
              onChange={() => {
                setFilterState({
                  type: "rating",
                  paylod: 4,
                });
              }}
            >
              <input
                type="radio"
                name="ratings"
                id="my_radio"
                className="radio__input"
                checked={filter_state.rating === 4}
              />
              <div className="radio__radio pad-2px"></div>4 Stars & Above
            </label>
            <label
              className="radio flex-center-row gap-0-5"
              onChange={() => {
                setFilterState({
                  type: "rating",
                  paylod: 3,
                });
              }}
            >
              <input
                type="radio"
                name="ratings"
                id="my_radio"
                className="radio__input"
                checked={filter_state.rating === 3}
              />
              <div className="radio__radio pad-2px"></div>3 Stars & Above
            </label>
            <label
              className="radio flex-center-row gap-0-5"
              onChange={() => {
                setFilterState({
                  type: "rating",
                  paylod: 2,
                });
              }}
            >
              <input
                type="radio"
                name="ratings"
                id="my_radio"
                className="radio__input"
                checked={filter_state.rating === 2}
              />
              <div className="radio__radio pad-2px"></div>2 Stars & Above
            </label>
            <label
              className="radio flex-center-row gap-0-5"
              onChange={() => {
                setFilterState({
                  type: "rating",
                  paylod: 1,
                });
              }}
            >
              <input
                type="radio"
                name="ratings"
                id="my_radio"
                className="radio__input"
                checked={filter_state.rating === 1}
              />
              <div className="radio__radio pad-2px"></div>1 Stars & Above
            </label>
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
