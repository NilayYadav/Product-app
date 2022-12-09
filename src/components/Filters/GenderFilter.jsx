import { useFilter } from "../../context/filterProvider";

export function GenderFilter() {
  const { filterState, dispatchFilter } = useFilter();
  const { gender } = filterState || { gender: [] };

  function addGenderHandler(value) {
    dispatchFilter({ type: "ADD_GENDER", payload: value });
  }

  function removeGenderHandler(value) {
    dispatchFilter({ type: "REMOVE_GENDER", payload: value });
  }

  return (
    <div className="filter">
      <p>By Gender</p>
      <div>
        <input
          type="checkbox"
          id="men"
          name="men"
          value="Men"
          checked={gender.includes("Men")}
          onChange={
            gender.includes("Men")
              ? (e) => removeGenderHandler(e.target.value)
              : (e) => addGenderHandler(e.target.value)
          }
        />
        <label htmlFor="men">Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="women"
          name="women"
          value="Women"
          checked={gender.includes("Women")}
          onChange={
            gender.includes("Women")
              ? (e) => removeGenderHandler(e.target.value)
              : (e) => addGenderHandler(e.target.value)
          }
        />
        <label htmlFor="women">Women</label>
      </div>
    </div>
  );
}
