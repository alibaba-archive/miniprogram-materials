import { request } from "../utils/request";
import { categories } from "./__mock__/category";

export const getAllCategories = () => {
  // return request(`${URL_PREFIX}/category`);
  return Promise.resolve(categories);
};
