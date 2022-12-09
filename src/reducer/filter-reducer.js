export function filterReducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };

    case "ADD_BRAND":
      return { ...state, brand: [...state.brand, action.payload] };

    case "REMOVE_BRAND":
      return {
        ...state,
        brand: state.brand.filter((b) => b !== action.payload),
      };

    case "ADD_SIZE":
      return { ...state, size: [...state.size, action.payload] };

    case "REMOVE_SIZE":
      return {
        ...state,
        size: state.size.filter((s) => s !== action.payload),
      };

    case "ADD_GENDER":
      return { ...state, gender: [...state.gender, action.payload] };

    case "REMOVE_GENDER":
      return {
        ...state,
        gender: state.gender.filter((g) => g !== action.payload),
      };

    case "CLEAR":
      return { ...state, sortBy: "", brand: [], size: [], gender: [] };

    default:
      return state;
  }
}
