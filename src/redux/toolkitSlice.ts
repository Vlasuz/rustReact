import { createSlice } from "@reduxjs/toolkit";
import { IAsideButtonToRight, IChatItem, IFaqList, IFilterData, IProduct, ISiteSettings, ISkin, ITrigger, IUser, IUserHistory, IUserHistoryAirdrop, IUserHistoryBalance, IUserHistoryFight } from "../model";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        userInventory: <IProduct[]>[],
        userGames: <IUserHistory | unknown>[],
        userHistory: <IUserHistoryBalance[]>[],
        userOnline: <number>0,
        mutedUsers: <IUser[]>[],
        rightBlock: <IAsideButtonToRight>{},
        itemDrag: <IProduct>{},
        pererabZoneItems: <IProduct[]>[],
        rightFilter: <IFilterData>{},
        chatItems: <IChatItem[]>[],
        language: <string>'RU',
        shopList: <IProduct[]>[],
        shopCart: <IProduct[]>[],
        inventoryWithdraw: <IProduct[]>[],
        faqList: <IFaqList[]>[],
        siteSettings: <ISiteSettings>{},
        skinShop: {},
        notice: <string>'',
        sound: <string>'',
        popup: <string>'',

        isOpenWsChat: <boolean>false,

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
                state.userInventory = [...state.userInventory, ...action.payload]
            }
        },
        setUserHistory(state, action) {
            state.userHistory = action.payload
        },
        setUserOnline(state, action) {
            state.userOnline = action.payload
        },

        setNotice(state, action) {
            state.notice = action.payload
        },
        setSound(state, action) {
            state.sound = action.payload
        },

        setMutedUsers(state, action) {
            state.mutedUsers = action.payload
        },
        addMutedUsers(state, action) {
            state.mutedUsers = [...state.mutedUsers, action.payload]
        },
        removeMutedUsers(state, action) {
            state.mutedUsers = state.mutedUsers.filter((item: IUser) => item.id !== action.payload.id)
        },

        changeUserBalance(state, action) {
            state.user = {...state.user, balance: state.user.balance + action.payload}
        },
        setUserBalance(state, action) {
            state.user = {...state.user, balance: action.payload}
        },

        setShopList(state, action) {
            state.shopList = action.payload
        },

        setSkinShop(state, action) {
            state.skinShop = action.payload
        },

        setSiteSettings(state, action) {
            state.siteSettings = action.payload
        },
        setFaqList(state, action) {
            state.faqList = action.payload
        },

        addItemToCart(state, action) {
            state.shopCart = [...state.shopCart, ...action.payload]
        },
        removeItemFromCart(state, action) {
            if(action.payload === 'all') {
                state.shopCart = []    
            } else {
                state.shopCart = state.shopCart.filter(item => item.id !== action.payload.id)
            }
        },

        addItemToWithdraw(state, action) {
            if(!state.inventoryWithdraw.some(item => item.id === action.payload.id)) {
                state.inventoryWithdraw = [...state.inventoryWithdraw, action.payload]
            } else  {
                state.inventoryWithdraw = state.inventoryWithdraw.filter(item => item.id !== action.payload.id)
            }
        },

        setItemDrag(state, action) {
            state.itemDrag = action.payload
        },
        setPererabZoneItems(state, action) {
            if (action.payload.status === 'delete' && action.payload.item === 'all') {
                state.pererabZoneItems = []
            } else if (action.payload.status === 'delete') {
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

        setOpenWsChat(state) {
            state.isOpenWsChat = true
        },
        setPopup(state, action) {
            state.popup = action.payload
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
    setUserHistory,
    setUserOnline,

    changeUserBalance,
    setUserBalance,

    setMutedUsers,
    addMutedUsers,
    removeMutedUsers,

    setShopList,
    setNotice,
    setSound,

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
    setSkinShop,
    setSiteSettings,

    setOpenWsChat,
    setPopup,

    setTrigger

} = toolkitSlice.actions;