export const SET_NOTICE = 'SET_NOTICE'

const initialState = {
    notice: "",
}

export const reducerNotice = (state = initialState, action) => {

    switch (action.type) {
        case SET_NOTICE:
            let notice = action.notice

            return {
                ...state,
                notice
            }
        default:
            return state

    }
}


export function setNotice(notice) {
    return {
        type: SET_NOTICE,
        notice
    }
}