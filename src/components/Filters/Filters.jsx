import { GenderFilter } from "./GenderFilter";
import { BrandFilter } from "./BrandFilter";
import { SizeFilter } from "./SizeFilter";
import { Sort } from "./Sort";
import "./Filter.css";
import { useFilter } from "../../context/filterProvider";

export function Filters() {
  const { dispatchFilter } = useFilter();
  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3>Filters</h3>
        <button onClick={() => dispatchFilter({ type: "CLEAR" })}>
          clear all
        </button>
      </div>
      <Sort />
      <GenderFilter />
      <BrandFilter />
      <SizeFilter />
    </div>
  );
}
