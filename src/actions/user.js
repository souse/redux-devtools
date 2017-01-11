
import api from '../api';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';


export const getUser = () => {
	return {
		type: GET_USER,
		payload: {
			promise: api.post('/get_user')	
		}
	}
}