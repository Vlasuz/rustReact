import {
    AIRDROP_COUNT_SLEEPERS,
    AIRDROP_DROP, AIRDROP_DROP_IS_DROP_DOWN, AIRDROP_DROP_SET_COODS,
    AIRDROP_LENGTH_PLANE,
    AIRDROP_MEMBERS_ADD,
    AIRDROP_STEP, AIRDROP_STEP_RIGHTS,
    AIRDROP_TIMER_SECONDS,
    AIRDROP_TRAJECTORY_PLANE,
    AUTH,
    DRAG_AND_DROP, DRAG_AND_DROP_ADD,
    DRAG_AND_DROP_REMOVE,
    PROCESSOR_LIST_ADD, PROCESSOR_LIST_DELETE,
    PROCESSOR_LIST_REMOVE,
    SHOP_LIST,
    SHOP_LIST_ADD,
    SHOP_LIST_REMOVE, STORAGE_WITHDRAW_DELETE, STORAGE_WITHDRAW_TOGGLE,
    SWITCHER_RIGHTS,
    USER_DATA,
    USER_INVENTORY_ADD, USER_INVENTORY_CHECK, USER_INVENTORY_DELETE,
    USER_INVENTORY_REMOVE, USER_INVENTORY_UNCHECK,
    USER_STATS
} from "./types";

export function authAction(auth) {
    return {
        type: AUTH,
        auth
    }
}
export function userData(data) {
    return {
        type: USER_DATA,
        data
    }
}
export function userStats(stats) {
    return {
        type: USER_STATS,
        stats
    }
}
export function userInventoryAdd(list) {
    return {
        type: USER_INVENTORY_ADD,
        list
    }
}
export function userInventoryDelete(list) {
    return {
        type: USER_INVENTORY_DELETE,
        list
    }
}
export function userInventoryRemove(item) {
    return {
        type: USER_INVENTORY_REMOVE,
        item
    }
}
export function userInventoryCheck(item) {
    return {
        type: USER_INVENTORY_CHECK,
        item
    }
}
export function userInventoryUncheck(item) {
    return {
        type: USER_INVENTORY_UNCHECK,
        item
    }
}

export function switcherRights(data) {
    return {
        type: SWITCHER_RIGHTS,
        data
    }
}

export function airdropTimerSeconds(seconds) {
    return {
        type: AIRDROP_TIMER_SECONDS,
        seconds
    }
}
export function airdropMembers(data) {
    return {
        type: AIRDROP_MEMBERS_ADD,
        data
    }
}
export function airdropTrajectoryPlane(data) {
    return {
        type: AIRDROP_TRAJECTORY_PLANE,
        data
    }
}
export function airdropLengthPlane(length) {
    return {
        type: AIRDROP_LENGTH_PLANE,
        length
    }
}
export function airdropStep(step) {
    return {
        type: AIRDROP_STEP,
        step
    }
}
export function airdropStepRights(step) {
    return {
        type: AIRDROP_STEP_RIGHTS,
        step
    }
}
export function airdropCountSleepers(sleepers) {
    return {
        type: AIRDROP_COUNT_SLEEPERS,
        sleepers
    }
}
export function airdropDropSetCoods(data) {
    return {
        type: AIRDROP_DROP_SET_COODS,
        data
    }
}
export function airdropDropIsDropDown(data) {
    return {
        type: AIRDROP_DROP_IS_DROP_DOWN,
        data
    }
}

export function shopList(list) {
    return {
        type: SHOP_LIST,
        list
    }
}
export function shopListAdd(item) {
    return {
        type: SHOP_LIST_ADD,
        item
    }
}
export function shopListRemove(item) {
    return {
        type: SHOP_LIST_REMOVE,
        item
    }
}

export function processorListAdd(item) {
    return {
        type: PROCESSOR_LIST_ADD,
        item
    }
}
export function processorListRemove(item) {
    return {
        type: PROCESSOR_LIST_REMOVE,
        item
    }
}
export function processorListDelete() {
    return {
        type: PROCESSOR_LIST_DELETE,
    }
}

export function storageListToggle(item) {
    return {
        type: STORAGE_WITHDRAW_TOGGLE,
        item
    }
}
export function storageListDelete() {
    return {
        type: STORAGE_WITHDRAW_DELETE,
    }
}