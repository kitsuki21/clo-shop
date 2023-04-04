const defaultState = {
  selectedCategory: "all",
};

const SELECTED_CATEGORY = "SELECTED_CATEGORY";

export const selectedCategoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export const selectedCategoryAction = (payload) => ({
  type: SELECTED_CATEGORY,
  payload,
});
