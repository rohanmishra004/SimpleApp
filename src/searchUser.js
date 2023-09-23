import React, { useState } from "react";

const SearchUser = ({users}) => {
    const [searchItem, setSearchItem] = useState('');
    const [searchRes, setSearchRes] = useState([]);

    const handleSearch = (e) => {
        const filterUsers = users.filter((user) => user.name.toLowerCase().includes(searchItem.toLowerCase()));
        setSearchRes(filterUsers)
    }

    return (
        <div>
            <h2>Search Users</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchRes.map((user, index) => (
                    <li key={index}>
                        {user.name} is present
                    </li>
                ))}
            </ul>
        </div>
    )

    
}


export default SearchUser



