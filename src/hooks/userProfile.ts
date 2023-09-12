import axios from "axios";
import getCookies from "../functions/getCookie";
import { getApiLink } from "../functions/getApiLink";
import { setUser } from "../redux/toolkitSlice";
import { useEffect, useState } from "react";

interface useUserProfileProps {
    id: string
}

export const useUserProfile = ({ id }: useUserProfileProps) => {

    const [user, setUser] = useState({})

    if (id === "undefined") return {};
    if (Object.keys(user).length) return user;

    axios.get(getApiLink(`api/user/info/?id=${id}`)).then(({ data }) => {

        setUser(data)
        console.log('xxxx', data)

    }).catch(error => {
        console.log('Error with get user: ', error)
    })

    return user;
}