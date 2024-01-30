export default function setCookie(name: any, data: any) {

    const domain = window.location.hostname
    const maxAge = 99999999

    document.cookie = `${name}=${data}; path=/; domain=${domain}; max-age=${maxAge}; secure;`
}