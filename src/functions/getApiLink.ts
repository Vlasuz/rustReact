export const getApiLink = (api: string, isSocket?: boolean) => {
    return isSocket ? `wss://api.smallstash.gg/${api}` :  `https://api.smallstash.gg/${api}`
}