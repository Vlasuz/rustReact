import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { getApiLink } from "../functions/getApiLink"
import setCookie from "../functions/setCookie"
import { setUser } from "../redux/toolkitSlice"

export const useSteamLogin = () => {
    // http://localhost:3000
    // https://smallstash.gg

    let location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(window.location.search)

    let auth_params = {
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.return_to': window.location.href,
        'openid.realm': window.location.href,
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
    }

    const steamData = window.location.search
    const urlAxios = getApiLink(`api/auth/login/${steamData}`);

    useEffect(() => {

        if(!steamData.includes('openid')) return;

        axios.post(urlAxios).then(({data}) => {

            dispatch(setUser(data.user))
            navigate(location.pathname)
            setCookie('access_token', data.access_token)

        })
        
    }, [])

    return {auth_params}
}