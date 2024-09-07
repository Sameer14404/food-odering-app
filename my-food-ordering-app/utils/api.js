const PROXY_URL = "https://api.allorigins.win/get?url=";
 export const MAIN_API = `${PROXY_URL}${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`;

export const MENU_LIST_API = (restaurantId) => 
  `${PROXY_URL}${encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${restaurantId}`)}`;