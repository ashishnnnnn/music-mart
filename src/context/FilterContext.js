import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/FilterReducer";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const initial_filter_state = {
  sortby: "none",
  price: 30000,
  category: [],
  rating: "none",
};

const FilterProvider = ({ children }) => {
  const [filter_state, setFilterState] = useReducer(
    FilterReducer,
    initial_filter_state
  );
  return (
    <FilterContext.Provider value={{ filter_state, setFilterState }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
