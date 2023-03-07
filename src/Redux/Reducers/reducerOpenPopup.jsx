export const OPEN_POPUP = 'OPEN_POPUP'

const initialState = {
    popup: "",
    props: {}
}

export const reducerOpenPopup = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_POPUP:

            return {
                ...state,
                popup: action.popup,
                props: action.props
            }
        default:
            return state

    }
}


export function setOpenPopup(popup, props) {
    return {
        type: OPEN_POPUP,
        popup,
        props
    }
}