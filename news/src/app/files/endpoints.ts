const API_KEY: string = "deb7c50ba99f4e0288001d409256d7ff";

export const TOP_NEWS_ENDPOINT_US: string = "https://newsapi.org/v2/top-headlines?country=us&apiKey="+API_KEY;
export const TOP_NEWS_ENDPOINT_GB: string = "https://newsapi.org/v2/top-headlines?country=gb&apiKey="+API_KEY;

export const TOP_NEWS_ENDPOINT_US_ENTERTAINMENT: string = TOP_NEWS_ENDPOINT_US+"&category=entertainment";
export const TOP_NEWS_ENDPOINT_US_GENERAL: string = TOP_NEWS_ENDPOINT_US+"&category=general";
export const TOP_NEWS_ENDPOINT_US_HEALTH: string = TOP_NEWS_ENDPOINT_US+"&category=health";
export const TOP_NEWS_ENDPOINT_US_SCIENCE: string = TOP_NEWS_ENDPOINT_US+"&category=science";
export const TOP_NEWS_ENDPOINT_US_SPORT: string = TOP_NEWS_ENDPOINT_US+"&category=sport";
export const TOP_NEWS_ENDPOINT_US_TECHNOLOGY: string = TOP_NEWS_ENDPOINT_US+"&category=technology";

export const TOP_NEWS_ENDPOINT_GB_ENTERTAINMENT: string = TOP_NEWS_ENDPOINT_GB+"&category=entertainment";
export const TOP_NEWS_ENDPOINT_GB_GENERAL: string = TOP_NEWS_ENDPOINT_GB+"&category=general";
export const TOP_NEWS_ENDPOINT_GB_HEALTH: string = TOP_NEWS_ENDPOINT_GB+"&category=health";
export const TOP_NEWS_ENDPOINT_GB_SCIENCE: string = TOP_NEWS_ENDPOINT_GB+"&category=science";
export const TOP_NEWS_ENDPOINT_GB_SPORT: string = TOP_NEWS_ENDPOINT_GB+"&category=sport";
export const TOP_NEWS_ENDPOINT_GB_TECHNOLOGY: string = TOP_NEWS_ENDPOINT_GB+"&category=technology";