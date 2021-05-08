import axios from 'axios';
import { API } from '../config/index';

export const employee_list = () => {
    return axios.get(`${API}/employee/list`);
};

export const getEmployee = (id) => {
    return axios.get(`${API}/employee`, {
        params: { id }
    });
};

export const addEmployee = (data) => {
    return axios({
        method: 'post',
        url: `${API}/employee`,
        data
    });
};

export const updateEmployee = (data) => {
    return axios({
        method: 'put',
        url: `${API}/employee`,
        data
    });
};

export const deleteEmployee = (id) => {
    return axios({
        method: 'delete',
        url: `${API}/employee`,
        data:{
        	id
        }
    });
};

export const deleteMultiEmployee = (ids) => {
    return axios({
        method: 'delete',
        url: `${API}/employee`,
        data:{
        	ids
        }
    });
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