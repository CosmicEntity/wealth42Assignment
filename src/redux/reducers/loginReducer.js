export const loginReducer = (
    state={},
    action
)=>{
    switch(action.type){
        case "LOGIN": 
        console.log("log in is ", action.payload);
        return {
            ...state,
            loggedIn: action.payload
        }

        default: return state;
    }
}