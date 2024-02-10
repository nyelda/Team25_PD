import { createContext, useReducer } from 'react'

export const AccountsContext = createContext()

export const accountsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACCOUNTS':
            return {
                accounts: action.payload
            }
        case 'CREATE_ACCOUNT':
            return {
                accounts: [action.payload, ...state.accounts]
            }
        case 'DELETE_ACCOUNT':
            return {
                accounts: state.accounts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const AccountsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountsReducer, {
        accounts: null
    })


    return (
        <AccountsContext.Provider value={{...state, dispatch}}>
           { children } 
        </AccountsContext.Provider>
    )
}