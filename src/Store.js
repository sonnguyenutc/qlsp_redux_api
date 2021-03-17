const redux = require("redux");

const productsInitialState = {
    products: [],
    editProduct: "",
};

const products = (state = productsInitialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, products: action.item };
        case "SEND_DATA_EDIT":
            return { ...state, editProduct: action.item };
        case "EDIT_DATA":
            return { ...state, products: action.item };
        case "ADD_DATA":
            return { ...state, products: action.item };
        default:
            return state;
    }
};

var store = redux.createStore(products);
export default store;
