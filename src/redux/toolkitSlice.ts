import { createSlice } from "@reduxjs/toolkit";
import { IAsideButtonToRight, IChatItem, IFaqList, IFilterData, IProduct, ISiteSettings, ITrigger, IUser, IUserHistory, IUserHistoryAirdrop, IUserHistoryFight } from "../model";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        userInventory: <IProduct[]>[],
        userGames: <IUserHistory | unknown>[],
        rightBlock: <IAsideButtonToRight>{},
        itemDrag: <IProduct>{},
        pererabZoneItems: <IProduct[]>[],
        rightFilter: <IFilterData>{},
        chatItems: <IChatItem[]>[],
        language: <string>'RU',
        shopCart: <IProduct[]>[],
        inventoryWithdraw: <IProduct[]>[],
        faqList: <IFaqList[]>[],
        siteSettings: <ISiteSettings>{},

        trigger: <ITrigger>{ type: '', status: true }
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setUserGames(state, action) {
            state.userGames = action.payload
        },
        setUserInventory(state, action) {
            if (action.payload.status === 'delete') {
                state.userInventory = state.userInventory.filter(item => item.id !== action.payload.item.id)
            } else {
                state.userInventory = action.payload
            }
        },

        setSiteSettings(state, action) {
            state.siteSettings = action.payload
        },
        setFaqList(state, action) {
            state.faqList = action.payload
        },

        addItemToCart(state, action) {
            if(!state.shopCart.some(item => item.id === action.payload.id)) {
                state.shopCart = [...state.shopCart, action.payload]
            } else {
                state.shopCart = state.shopCart.filter(item => item.id !== action.payload.id)
            }
        },
        addItemToWithdraw(state, action) {
            if(!state.inventoryWithdraw.some(item => item.id === action.payload.id)) {
                state.inventoryWithdraw = [...state.inventoryWithdraw, action.payload]
            } else {
                state.inventoryWithdraw = state.inventoryWithdraw.filter(item => item.id !== action.payload.id)
            }
        },

        removeItemFromCart(state, action) {
            state.shopCart = state.shopCart.filter(item => item.id !== action.payload.id)
        },

        setItemDrag(state, action) {
            state.itemDrag = action.payload
        },
        setPererabZoneItems(state, action) {
            if (action.payload.status === 'delete') {
                state.pererabZoneItems = state.pererabZoneItems.filter(item => item.id !== action.payload.item.id)
            } else {
                state.pererabZoneItems = [...state.pererabZoneItems, action.payload]
            }
        },
        setRightFilter(state, action) {
            state.rightFilter = action.payload
        },

        setChatItems(state, action) {
            state.chatItems = action.payload
        },
        addChatItem(state, action) {
            state.chatItems = [...state.chatItems, action.payload]
        },
        removeChatItem(state, action) {
            state.chatItems = state.chatItems.filter(item => item.id !== action.payload.id)
        },

        setLanguage(state, action) {
            state.language = action.payload
        },

        setRightBlock(state, action) {
            state.rightBlock = action.payload
        },

        setTrigger(state, action) {
            state.trigger = {
                type: action.payload,
                status: !state.trigger.status
            }
        },
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    setUserGames,
    setUserInventory,

    setItemDrag,
    setPererabZoneItems,
    setRightFilter,

    setChatItems,
    addChatItem,
    removeChatItem,

    addItemToCart,
    addItemToWithdraw,
    removeItemFromCart,

    setLanguage,

    setRightBlock,

    setFaqList,
    setSiteSettings,

    setTrigger

} = toolkitSlice.actions;