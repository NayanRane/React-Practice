function UserList({users}) {
    return (
        <div>
            <h3>Users Online:</h3>
            <ul>
                {users.map((user,index) => (
                    <li key={index + 1}>{`Welcome ${user}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;
