export const loginRequest = payload => ({
    type: "LOGIN_REQUEST",
    payload,
});

export const logoutRequest = payload => ({
    type: "LOGOUT_REQUEST",
    payload,
});

export const registerRequest = payload => ({
    type: "REGISTER_REQUEST",
    payload,
});

export const passwordRequest = payload => ({
    type: "PASSWORD_REQUEST",
    payload,
});


export const  addToCartRequest = payload => ({
    type: "ADD_TO_CART",
    payload,
});

export const  removeFromCartRequest = payload => ({
    type: "REMOVE_FROM_CART",
    payload,
});

export const addToBuyerRequest = payload => ({
    type: "ADD_TO_BUYER",
    payload,
})


export const editAccountRequest = payload => ({
    type: "EDIT_ACCOUNT_REQUEST",
    payload,
})

