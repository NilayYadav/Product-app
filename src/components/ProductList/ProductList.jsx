import { useFilter } from "../../context/filterProvider";
import productData from "../../data/products.json";
import {
  getFilterBrandData,
  getFilterGenderData,
  getFilterSizeData,
  getSortedData,
} from "../../utils";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export function ProductList() {
  const { filterState } = useFilter();
  const { sortBy, brand, size, gender } = filterState;

  const filterBrandData = getFilterBrandData(productData, brand);
  const filterGenderData = getFilterGenderData(filterBrandData, gender);
  const filterSizeData = getFilterSizeData(filterGenderData, size);
  const sortedData = getSortedData(filterSizeData, sortBy);

  return (
    <div className="list-container">
      {sortedData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
