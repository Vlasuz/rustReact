import headerLogged from "../../Components/ComponentsHeader/HeaderLogged";

export const FIGHTS_ROOMS_SET = 'FIGHTS_ROOMS_SET'
export const FIGHTS_ROOMS_ADD = 'FIGHTS_ROOMS_ADD'
export const FIGHTS_ROOMS_REMOVE = 'FIGHTS_ROOMS_REMOVE'
export const FIGHTS_ROOMS_CHANGE = 'FIGHTS_ROOMS_CHANGE'

const initialState = {
    rooms: [],
}

export const reducerFightsRooms = (state = initialState, action) => {

    switch (action.type) {
        case FIGHTS_ROOMS_SET:
            return {
                ...state,
                rooms: action.rooms
            }
        case FIGHTS_ROOMS_ADD:
            return {
                ...state,
                rooms: [action.room, ...state.rooms]
            }
        case FIGHTS_ROOMS_REMOVE:
            const newArray = state.rooms.filter(item => item.id !== action.id)

            return {
                ...state,
                rooms: newArray
            }
        case FIGHTS_ROOMS_CHANGE:
            const changedArray = state.rooms.filter(item => item.id !== action.room.id)

            return {
                ...state,
                rooms: [...changedArray, action.room]
            }
        default:
            return state

    }
}


export function fightRoomSet(rooms) {
    return {
        type: FIGHTS_ROOMS_SET,
        rooms
    }
}
export function fightRoomAdd(room) {
    return {
        type: FIGHTS_ROOMS_ADD,
        room
    }
}
export function fightRoomRemove(id) {
    return {
        type: FIGHTS_ROOMS_REMOVE,
        id
    }
}
export function fightRoomChange(room) {
    return {
        type: FIGHTS_ROOMS_CHANGE,
        room,
    }
}