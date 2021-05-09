import { ADD_USER } from "../constants/index";

const initialState = {
  	users: []
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_USER) {
	    // state.users.push(action.payload);

	    let users = [...state.users];

	    // if code exist
	    	// check current length and inject at the end
    	// else 
    		// push it at the end
		if(action.payload.code === '' || action.payload.code === null){

			users.push(action.payload);
			
		}else{

			let i = users.findIndex((a)=>{
				return (a.code !== '' && a.code !== null);
			});

			if(i === -1){
				users.unshift(action.payload);
			}else{
				i++;
				users.splice(i, 0, action.payload);
			}
			
		}

	    return Object.assign({}, state, {
	      users
	    });
    }
	return state;
};

export default rootReducer;
