import React from 'react';
import { useParams } from 'react-router-dom';

function Router() {
    const { id } = useParams();

    const getRouterDetails = RouterId => {
    const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        avatar: 'https://via.placeholder.com/150x150',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        avatar: 'https://via.placeholder.com/150x150',
    },
    {
        id: 3,
        name: 'Bob Smith',
        email: 'bobsmith@example.com',
        avatar: 'https://via.placeholder.com/150x150',
    },
    ];
    return users.find(user => user.id === parseInt(RouterId));
    };

    const user = getRouterDetails(id);
    return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <img src='{user.avatar}' alt='{user.name}' />
    </div>
    );
}

export default Router;