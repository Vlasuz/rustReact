export const SET_PAGES = 'SET_PAGES'

const initialState = {
    pages: [],
}

export const reducerPages = (state = initialState, action) => {

    switch (action.type) {
        case SET_PAGES:
            return {
                ...state,
                pages: action.pages
            }
        default:
            return state

    }
}


export function setPages(pages) {
    return {
        type: SET_PAGES,
        pages
    }
}