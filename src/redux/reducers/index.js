const initialState = {
    table : [],
};

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TABLE":
            return {...state, table: action.payload};
        default:
            return state;
    }
}
export default Reducers;