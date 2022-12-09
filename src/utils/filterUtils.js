import productData from "../data/products.json";

export function allBrands() {
  return productData.map((product) => product.brand);
}

export function getSortedData(productData, sortBy) {
  if (sortBy === "LOW_TO_HIGH") {
    return productData.sort((a, b) => a["price"] - b["price"]);
  }
  if (sortBy === "HIGH_TO_LOW") {
    return productData.sort((a, b) => b["price"] - a["price"]);
  }
  return productData;
}

export function getFilterBrandData(productData, selectedBrand) {
  if (selectedBrand.length > 0) {
    return productData.filter(({ brand }) => selectedBrand.includes(brand));
  }
  return productData;
}

export function getFilterGenderData(productData, selectedGender) {
  if (selectedGender.length > 0) {
    return productData.filter(({ gender }) => selectedGender.includes(gender));
  }
  return productData;
}

export function getFilterSizeData(productData, selectedSize) {
  if (selectedSize.length > 0) {
    return productData.filter(({ size }) => selectedSize.includes(size));
  }
  return productData;
}
