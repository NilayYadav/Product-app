import { useFilter } from "../../context/filterProvider";

export function Sort() {
  const { filterState, dispatchFilter } = useFilter();
  const { sortBy } = filterState || "";

  function sortHandler(value) {
    dispatchFilter({ type: "SORT", payload: value });
  }

  return (
    <div className="filter">
      <p>Sort By</p>
      <div>
        <input
          type="radio"
          id="sort"
          name="sort"
          value="HIGH_TO_LOW"
          checked={sortBy === "HIGH_TO_LOW" ? true : false}
          onChange={(e) => sortHandler(e.target.value)}
        />
        <label htmlFor="huey">High-to-Low</label>
      </div>
      <div>
        <input
          type="radio"
          id="sort"
          name="sort"
          value="LOW_TO_HIGH"
          checked={sortBy === "LOW_TO_HIGH" ? true : false}
          onChange={(e) => sortHandler(e.target.value)}
        />
        <label htmlFor="dewey">Low-to-High</label>
      </div>
    </div>
  );
}
