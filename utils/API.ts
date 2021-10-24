const URL_PROD = "https://v2.swapnadeep.com";
const URL_DEV = "http://localhost:3000";

const URL = process.env.NODE_ENV === "production" ? URL_PROD : URL_DEV;

export { URL };
