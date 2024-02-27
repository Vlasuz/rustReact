import {createSlice} from "@reduxjs/toolkit";
import {
    IAsideButtonToRight,
    IChatItem, ICrate,
    IFaqList, IFightItem,
    IFilterData,
    IPages,
    IProduct,
    ISiteSettings,
    ISkin,
    ITrigger,
    IUser,
    IUserHistory,
    IUserHistoryAirdrop,
    IUserHistoryBalance,
    IUserHistoryFight, IWithdrawInfo
} from "../model";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {

        // USER
        user: <IUser>{},
        userInventory: <IProduct[]>[],
        userGames: <any[]>[],
        userHistory: <IUserHistoryBalance[]>[],
        userOnline: <number>0,

        // WITHDRAW
        inventoryWithdraw: <IProduct[]>[],
        withdrawInfo: <IWithdrawInfo>{},

        // AIRDROP
        airdropUserStatus: <string>"",
        airdropBagsMap: <any>[],
        airdropBags: <number>0,
        airdropBagsFixed: <number>0,
        airdropSaveZone1: <any>[],
        airdropSaveZone2: <any>[],
        airdropSaveZone3: <any>[],
        airdropSaveZone4: <any>[],

        // FIGHT
        fightItemData: <IFightItem>{},

        // CHAT
        mutedUsers: <IUser[]>[],
        chatItems: <IChatItem[]>[],

        //CRATES
        crates: <ICrate[]>[],
        chosenCrate: <ICrate>{},
        crateRarities: [],

        // BATTLES
        battleCrates: <ICrate[]>[],

        // GENERAL
        pages: <IPages[]>[],
        rightBlock: <IAsideButtonToRight>{},
        itemDrag: <IProduct>{},
        pererabZoneItems: <IProduct[]>[],
        popupZoneItems: <IProduct[]>[],
        rightFilter: <IFilterData>{},
        language: <string>'RU',
        shopList: <IProduct[]>[],
        shopCart: <IProduct[]>[],
        faqList: <IFaqList[]>[],
        siteSettings: <ISiteSettings>{},
        skinShop: {},
        notice: <string>'',
        sound: <string>'',
        isOpenWsChat: <boolean>false,
        popup: <string>'',
        popupData: <any>{},

        trigger: <ITrigger>{type: '', status: true}
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setUserGames(state, action) {
            if(state.userGames.some(item => item.type === action.payload.type)) return;

            state.userGames = [...state.userGames, action.payload]
        },
        deleteUserGames(state) {
            state.userGames = []
        },
        setUserInventory(state, action) {
            if (action.payload.status === 'delete') {
                state.userInventory = state.userInventory.filter(item => item.id !== action.payload.item.id)
            } else {
                state.userInventory = [...state.userInventory, ...action.payload]
            }
        },
        clearUserInventory(state) {
            state.userInventory = []
        },
        setUserHistory(state, action) {
            state.userHistory = action.payload
        },
        setUserOnline(state, action) {
            state.userOnline = action.payload
        },
        setUserBalance(state, action) {
            if(action.payload.sum) {
                state.user.balance = state.user.balance + action.payload.money
            } else {
                state.user = {...state.user, balance: action.payload}
            }
        },

        addBattleCrate(state, action) {
            if(state.battleCrates.some((item: any) => item.crate.id === action.payload.crate.id)) return;
            state.battleCrates = [...state.battleCrates, action.payload]
        },
        changeBattleCrate(state, action) {
            state.battleCrates = state.battleCrates.filter((item: any) => {
                if(item.crate.id === action.payload.crate.id) {
                    return item.count = action.payload.count
                } else {
                    return item
                }
            })
        },
        removeBattleCrate(state, action) {
            state.battleCrates = state.battleCrates.filter((item: any) => item.crate.id !== action.payload.id)
        },

        setCrates(state, action) {
            state.crates = action.payload
        },
        setChosenCrates(state, action) {
            state.chosenCrate = action.payload
        },
        setCrateRarities(state, action) {
            state.crateRarities = action.payload
        },

        setWithdrawInfo(state, action) {
            state.withdrawInfo = action.payload
        },

        addAirdropBagsMap(state, action) {
            if(action?.payload?.status === "saves") {
                state.airdropBagsMap = action.payload.bags
            } else {
                state.airdropBagsMap = [...state.airdropBagsMap, action.payload]
            }
        },
        removeAirdropBagMap(state, action) {
            state.airdropBagsMap = state.airdropBagsMap.filter((item: any) => item.x !== action.payload.x && item.y !== action.payload.y)
        },
        changeAirdropBagsMap(state) {

            state.airdropBags = 0
            let newArray = [];

            for (let a = 0; a < state.airdropBagsFixed; a++) {
                const randomNumberX = Math.floor(Math.random() * 1480) + 20;
                const randomNumberY = Math.floor(Math.random() * 1480) + 20;

                newArray.push({x: randomNumberX, y: randomNumberY})
            }

            state.airdropBagsMap = newArray
        },
        clearAirdropBagsMap(state) {
            state.airdropBagsMap = []
        },

        setAirdropUserStatus(state, action) {
            state.airdropUserStatus = action.payload
        },

        setAirdropBags(state, action) {
            state.airdropBags = action.payload
            state.airdropBagsFixed = action.payload
        },
        removeAirdropBags(state, action) {
            state.airdropBags = action.payload > 0 ? state.airdropBags - action.payload : state.airdropBags
        },
        addAirdropBags(state) {
            state.airdropBags = state.airdropBags + 1
        },

        setAirdropSaveZone1(state, action) {
            if(action.payload === "clear") {
                state.airdropSaveZone1 = []
            } else if(action.payload !== "") {
                const array = action.payload.replaceAll("x_pos", "x").replaceAll("y_pos", "y")
                state.airdropSaveZone1 = JSON.parse(array)
            } else {
                state.airdropSaveZone1 = state.airdropBagsMap
            }
        },
        setAirdropSaveZone2(state, action) {
            if(action.payload === "clear") {
                state.airdropSaveZone2 = []
            } else if(action.payload !== "") {
                const array = action.payload.replaceAll("x_pos", "x").replaceAll("y_pos", "y")
                state.airdropSaveZone2 = JSON.parse(array)
            } else {
                state.airdropSaveZone2 = state.airdropBagsMap
            }
        },
        setAirdropSaveZone3(state, action) {
            if(action.payload === "clear") {
                state.airdropSaveZone3 = []
            } else if(action.payload !== "") {
                const array = action.payload.replaceAll("x_pos", "x").replaceAll("y_pos", "y")
                state.airdropSaveZone3 = JSON.parse(array)
            } else {
                state.airdropSaveZone3 = state.airdropBagsMap
            }
        },
        setAirdropSaveZone4(state, action) {
            if(action.payload === "clear") {
                state.airdropSaveZone4 = []
            } else if(action.payload !== "") {
                const array = action.payload.replaceAll("x_pos", "x").replaceAll("y_pos", "y")
                state.airdropSaveZone4 = JSON.parse(array)
            } else {
                state.airdropSaveZone4 = state.airdropBagsMap
            }
        },

        setPages(state, action) {
            state.pages = action.payload
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
            if (action.payload === 'all') {
                state.shopCart = []
            } else {
                state.shopCart = state.shopCart.filter(item => item.id !== action.payload.id)
            }
        },

        addItemToWithdraw(state, action) {
            if (!state.inventoryWithdraw.some(item => item.id === action.payload.id)) {
                state.inventoryWithdraw = [...state.inventoryWithdraw, action.payload]
            } else {
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
        setPopupZoneItems(state, action) {
            if (action.payload.status === 'delete' && action.payload.item === 'all') {
                state.userInventory = [...state.userInventory, ...state.popupZoneItems]
                state.popupZoneItems = []
            } else if (action.payload.status === 'delete') {
                state.popupZoneItems = state.popupZoneItems.filter(item => item?.id !== action.payload.item?.id)
            } else {
                state.popupZoneItems = [...state.popupZoneItems, action.payload]
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
        setPopupData(state, action) {
            state.popupData = action.payload
        },
        setFightItemData(state, action) {
            state.fightItemData = action.payload
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
    deleteUserGames,
    setUserInventory,
    clearUserInventory,
    setUserHistory,
    setUserOnline,

    setWithdrawInfo,

    changeUserBalance,
    setUserBalance,

    addBattleCrate,
    changeBattleCrate,
    removeBattleCrate,

    setPages,

    setMutedUsers,
    addMutedUsers,
    removeMutedUsers,

    setShopList,
    setNotice,
    setSound,

    setCrates,
    setChosenCrates,
    setCrateRarities,

    setItemDrag,
    setPererabZoneItems,
    setPopupZoneItems,
    setRightFilter,

    setChatItems,
    addChatItem,
    removeChatItem,

    addItemToCart,
    addItemToWithdraw,
    removeItemFromCart,

    setAirdropSaveZone1,
    setAirdropSaveZone2,
    setAirdropSaveZone3,
    setAirdropSaveZone4,
    setAirdropUserStatus,
    changeAirdropBagsMap,
    addAirdropBagsMap,
    removeAirdropBagMap,
    clearAirdropBagsMap,
    setAirdropBags,
    removeAirdropBags,
    addAirdropBags,

    setLanguage,

    setRightBlock,

    setFaqList,
    setSkinShop,
    setSiteSettings,

    setOpenWsChat,
    setPopup,
    setPopupData,

    setFightItemData,

    setTrigger

} = toolkitSlice.actions;