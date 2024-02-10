import { useAccountsContext } from '../hooks/useAccountsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AccountDetails = ({ account }) => {
    const { dispatch } = useAccountsContext()

    const handleClick = async () => {
        const response = await fetch('/api/signup/' + account._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if (response.ok) {
            dispatch({type: 'DELETE_ACCOUNT', payload: json})
        }
    }

    return (
        <div className="workout-details">
            <h2>{account.title}</h2>
            <p><strong>Username: </strong>{account.username}</p>
            <p><strong>Password: </strong>{account.password}</p>
            <p>{formatDistanceToNow(new Date(account.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>

    )
}

export default AccountDetails