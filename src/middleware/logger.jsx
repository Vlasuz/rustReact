export const logger = (store) => (next) => (action) => {

    // console.log('action', action)
    // console.log('before', store.getState())


    switch (action.type) {

    }

    let result = next(action);

    // console.log('after', store.getState())

    return result;

}
