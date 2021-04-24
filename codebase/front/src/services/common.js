import axios from 'axios';
import { API } from '../config/index';

export const employee_list = () => {
    return axios.get(`${API}/employee/list`);
};

export const getSettings = () => {
    return axios.get(`${API}/settings`);
};

export const updateSettings = (data) => {
    return axios({
	  method: 'put',
	  url: `${API}/settings`,
	  data
	});
};