const reducer = function(state = {count:4,user:{fname:"dummy"}},action){
    switch(action.type){
        case "UPDATE_COUNT" :
            state = {
                ...state,
                count: action.payload
            };
            break;
        case "UPDATE_USER":
            state = {
                ...state,
                user: action.payload
            }
            break;
        default:
            break;
    }
    
    return state;
}

export default reducer;