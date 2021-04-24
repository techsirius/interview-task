import axios from 'axios';
import { API } from '../config/index';

export const employee_list = () => {
    return axios.get(`${API}/employee/list`);
};