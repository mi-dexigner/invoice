export const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
};

export const actionTypes = {
    SET_USER : "SET_USER",
}; 

const reducer = (state, action) => {
    // console.log(action);

    switch(action.type) {
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user
            }
            case "LOGIN_SUCCESS":
                return {
                  user: action.payload,
                  isFetching: false,
                  error: false,
                };
        default:
            return state;
    }
};

export default reducer;