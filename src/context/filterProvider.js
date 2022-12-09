import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext({});

export function FilterProvider({ children }) {
  const filterInitialState = {
    sortBy: null,
    brand: [],
    size: [],
    gender: [],
  };

  const [filterState, dispatchFilter] = useReducer(
    filterReducer,
    filterInitialState
  );
  return (
    <FilterContext.Provider value={{ filterState, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
