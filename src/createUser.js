import React, { useState } from 'react';
import SearchUser from './searchUser';


const CreateUser = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name !== '' && age !== '') {
            const newUser = {
                name: name,
                age: age
            }

            setUsers([...users, newUser])
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    return (

        <div>
            <h1>User Create Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={handleAge}
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Users:</h2>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.name}, {user.age} years old
                        </li>
                    ))}
                </ul>
            </div>

            <SearchUser users ={users} />
        </div>
    )
}

export default CreateUser

