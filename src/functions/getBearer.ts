import axios from "axios";
import getCookies from "./getCookie";

export const getBearer = () => {
    const access_token = getCookies('access_token');

    axios.defaults.headers.get['Authorization'] = `Bearer ${access_token}`;
}