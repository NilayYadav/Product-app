import { useFilter } from "../../context/filterProvider";

export function SizeFilter() {
  const { filterState, dispatchFilter } = useFilter();
  const { size } = filterState || [];

  function addSizerHandler(value) {
    dispatchFilter({ type: "ADD_SIZE", payload: value });
  }

  function removeSizeHandler(value) {
    dispatchFilter({ type: "REMOVE_SIZE", payload: value });
  }

  return (
    <div className="filter">
      <p>By Size</p>
      <div>
        <input
          type="checkbox"
          id="size"
          name="size"
          value="S"
          checked={size.includes("S")}
          onChange={
            size.includes("S")
              ? (e) => removeSizeHandler(e.target.value)
              : (e) => addSizerHandler(e.target.value)
          }
        />
        <label htmlFor="size">Small</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="size"
          name="size"
          value="M"
          checked={size.includes("M")}
          onChange={
            size.includes("M")
              ? (e) => removeSizeHandler(e.target.value)
              : (e) => addSizerHandler(e.target.value)
          }
        />
        <label htmlFor="size">Medium</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="size"
          name="size"
          value="L"
          checked={size.includes("L")}
          onChange={
            size.includes("L")
              ? (e) => removeSizeHandler(e.target.value)
              : (e) => addSizerHandler(e.target.value)
          }
        />
        <label htmlFor="size">Large</label>
      </div>
    </div>
  );
}
