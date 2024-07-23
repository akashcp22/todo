import { base_url } from "./base_url";
import commonApi from "./commonApi";
export const addTask = async (data) => {
    return await commonApi('POST', `${base_url}/task`, data)
}
export const getTask = async () => {
    return   await commonApi('GET', `${base_url}/task`, '');
    
  }
export const deleteTask = async (id) => {
    return await commonApi('DELETE', `${base_url}/task/${id}`, {})
}