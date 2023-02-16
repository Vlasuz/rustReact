export const FIGHTS_ROOM_DATA = 'FIGHTS_ROOM_DATA'

const initialState = {
    "data": {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "game_state": "waiting",
        "fight_players": [
            {
                "user": {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "name": "string",
                    "avatar": "string",
                    "profile": "string",
                    "status": "string"
                },
                "coins": 0,
                "items": [
                    {
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "steam_id": "string",
                        "title": "string",
                        "image": "string",
                        "rarity": {
                            "title": "string",
                            "color": "string"
                        },
                        "price": {
                            "steam_price": 0,
                            "value": 0
                        }
                    }
                ]
            }
        ],
        "winner": {
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "name": "string",
                "avatar": "string",
                "profile": "string",
                "status": "string"
            },
            "coins": 0,
            "items": [
                {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "steam_id": "string",
                    "title": "string",
                    "image": "string",
                    "rarity": {
                        "title": "string",
                        "color": "string"
                    },
                    "price": {
                        "steam_price": 0,
                        "value": 0
                    }
                }
            ]
        }
    }
}

export const reducerFightsRoom = (state = initialState, action) => {

    switch (action.type) {
        case FIGHTS_ROOM_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state

    }
}


export function fightRoomData(data) {
    return {
        type: FIGHTS_ROOM_DATA,
        data
    }
}