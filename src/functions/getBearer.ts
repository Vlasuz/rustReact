import axios from "axios";
import getCookies from "./getCookie";

interface getBearerProps {
    type: string
}

export const getBearer = ({ type }: getBearerProps) => {
    const access_token = getCookies('access_token');

    const types: any = {
        'get': axios.defaults.headers.get['Authorization'] = `Bearer ${access_token}`,
        'post': axios.defaults.headers.post['Authorization'] = `Bearer ${access_token}`,
        'delete': axios.defaults.headers.delete['Authorization'] = `Bearer ${access_token}`,
        'put': axios.defaults.headers.put['Authorization'] = `Bearer ${access_token}`
    };

    return types[type];
}