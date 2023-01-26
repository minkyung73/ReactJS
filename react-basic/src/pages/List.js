import React from "react";

function User({userData}) {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

function UserList() {
    const users = [
        {email: 'user1@gmail.com', name: 'timothee1'}, 
        {email: 'user2@gmail.com', name: 'timothee2'}, 
        {email: 'user3@gmail.com', name: 'timothee3'}, 
        {email: 'user4@gmail.com', name: 'timothee4'}, 
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;