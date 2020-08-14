import { request } from "../utils/request";
import {
  searchTrend,
  allCommodity,
  trendCommodity,
  commodityDetail,
} from "./__mock__/commodity";
import { ALL, TREND } from "../asserts/CommodityType";

export const getSearchTrend = () => {
  // return request(`${URL_PREFIX}/trend`);
  return Promise.resolve(searchTrend);
};

export const getCommodity = ({ type = 1 }) => {
  // return request(`${URL_PREFIX}/commodity?type=${type}`);
  switch (type) {
    case ALL:
      return Promise.resolve(allCommodity);
    case TREND:
      return Promise.resolve(trendCommodity);
    default:
      return Promise.resolve([]);
  }
};

export const getCommodityDetail = id => {
  // return request(`${URL_PREFIX}/commodity/${id}`);
  return Promise.resolve(commodityDetail);
};
