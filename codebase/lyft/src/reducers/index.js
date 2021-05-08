import { ADD_USER } from "../constants/index";

const initialState = {
  	users: [{
        name: "Atul",
        code: "007"
    }]
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_USER) {
	    // state.users.push(action.payload);
	     return Object.assign({}, state, {
	      users: state.users.concat(action.payload)
	    });
    }
	return state;
};

export default rootReducer;
