
import api from '../api';

export const GET_USE = 'GET_USE';
export const GET_USE_SUCCESS = 'GET_USE_SUCCESS';


export const getUser = () => {
	return {
		type: GET_USE,
		payload: {
			promise: api.get('/get_user.json')	
		}
	}
}