const reducer = (state, action) => {
    switch (action.type){
        case "LOGIN_REQUEST":
            return {
                ...state,
                user: action.payload
            }

        case "REGISTER_REQUEST":
            return {
                ...state,
                user: action.payload
            }
            
        case "PASSWORD_REQUEST":
            return {
                ...state,
                user: action.payload
            }
        case "EDIT_ACCOUNT_REQUEST":
            return {
                ...state,
                user: action.payload
            }

        case "ADD_TO_CART":
            let new_state ={};
            if (state.cart.includes(action.payload)){
                new_state = {
                    ...state,
                
                    count: {
                        ...state.count,
                        [action.payload.id]: state.count[action.payload.id] + 1
                        
                    }

                }
            } else {
                new_state = {
                    ...state,
                    cart: [...state.cart, action.payload],
                    count: {
                        ...state.count,
                        [action.payload.id]: 1
                    }
                }
            }

            return new_state
        
        case "REMOVE_FROM_CART":
            if(state.count[action.payload.id] === 1){
                return {
                    ...state,
                    cart:state.cart.filter(items => items.id !== action.payload.id),
                    count: {
                        ...state.count,
                        [action.payload.id]: state.count[action.payload.id] - 1  
                    }
                }
            } else {
                return {
                    ...state,
                    count: {
                        ...state.count,
                        [action.payload.id]: state.count[action.payload.id] - 1  
                    }
                }
            }
            

        case "ADD_TO_BUYER":
            return{
                ...state,
                buyer: [...state.buyer, action.payload],
        }

    
        
        default:
            return state;
    }
}

export default reducer;