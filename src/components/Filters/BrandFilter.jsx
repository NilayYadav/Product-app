import { useFilter } from "../../context/filterProvider";
import { allBrands } from "../../utils/index";

export function BrandFilter() {
  const { filterState, dispatchFilter } = useFilter();
  const { brand: selectedBrand } = filterState || [];

  function addBrandrHandler(value) {
    dispatchFilter({ type: "ADD_BRAND", payload: value });
  }

  function removeBrandHandler(value) {
    dispatchFilter({ type: "REMOVE_BRAND", payload: value });
  }

  return (
    <div className="filter">
      <p>By Brand</p>
      {allBrands().map((brand, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id="brand"
              name="brand"
              value={brand}
              checked={selectedBrand.includes(brand)}
              onChange={
                selectedBrand.includes(brand)
                  ? (e) => removeBrandHandler(e.target.value)
                  : (e) => addBrandrHandler(e.target.value)
              }
            />
            <label htmlFor="brand">{brand}</label>
          </div>
        );
      })}
    </div>
  );
}
