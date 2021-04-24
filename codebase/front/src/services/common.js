import axios from 'axios';
import { API } from '../config/index';

export const employee_list = () => {
    return axios.get(`${API}/employee/list`);
};

export const getEmployee = (id) => {
    return axios({
	  method: 'get',
	  url: `${API}/employee`,
	  data: {
	  	employee_id: id
	  }
	});
};

export const addEmployee = (data) => {
    return axios({
	  method: 'post',
	  url: `${API}/employee`,
	  data
	});
};

export const updateEmployee = () => {
    return axios.put(`${API}/employee`);
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