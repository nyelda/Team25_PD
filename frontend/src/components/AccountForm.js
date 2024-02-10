import { useState } from "react"
import { useAccountsContext } from '../hooks/useAccountsContext'

const AccountForm = () => {
    const { dispatch } = useAccountsContext()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const account = {username, password}

        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setUsername('')
            setPassword('')
            setError(null)
            setEmptyFields([])
            console.log('new account added', json)
            dispatch({type: 'CREATE_ACCOUNT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Acount</h3>

            <label>Username:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={emptyFields.includes('username') ? 'error' : ''}
            />

            <label>Password:</label>
            <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={emptyFields.includes('password') ? 'error' : ''}
            />

            <button>Signup</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default AccountForm