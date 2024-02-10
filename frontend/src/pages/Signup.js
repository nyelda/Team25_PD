import { useEffect } from 'react'
import { useAccountsContext } from '../hooks/useAccountsContext'

// components
import AccountDetails from '../components/AccountDetails'
import AccountForm from '../components/AccountForm'

const Signup = () => {
    const {accounts, dispatch} = useAccountsContext()

    useEffect(() => {
        const fetchAccounts = async () => {
            const response = await fetch('/api/signup')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_ACCOUNTS', payload: json})
            }
        }

        fetchAccounts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {accounts && accounts.map((account) => (
                    <AccountDetails key={account._id} account={account} />
                ))}
            </div>
            <AccountForm />
        </div>
    )
}

export default Signup