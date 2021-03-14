import http from "./http";
// export const getGalleryApi= (params?: Object) => http.get("/pics/list",params)
export const getGalleryList = (params?: Object) =>http.get("/pics/list",params)
export const getHightablesList = (params?: Object) =>http.get("/hightables/list",params)
export const getCitiesList = (params?: Object) =>http.get("/cities/list",params)
export const getManageList = (params?: Object) =>http.post("/cities/manage/list",params)
//登录
export const loginApi = (params?: Object) => http.post('/users/login', params);