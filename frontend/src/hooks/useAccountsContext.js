import { AccountsContext } from '../context/AccountContext'
import { useContext } from 'react'

export const useAccountsContext = () => {
    const context = useContext(AccountsContext)

    if (!context) {
        throw Error('useAccountsContext must be used inside an AccountsContextProvider')
    }

    return context
}