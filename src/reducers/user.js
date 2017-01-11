
import { GET_USER, GET_USER_SUCCESS } from '../actions/user';

const initialState = {
	name: null,
	age: null
}

export default function getUser(state =initialState, action = {}) {
	switch (action.type) {
		// case GET_USER:
		// 	return state;
		case GET_USER_SUCCESS:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}