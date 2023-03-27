import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';

export const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/getusers')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div className="relative overflow-x-auto py-8 h-full m8 pt-6 p-4">
            <table className="w-full text-sm text-left rounded-xl text-gray-400">
                <thead className="text-xs uppercase  bg-light-color-grey text-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Prénom
                        </th>
                        <th scope="col" className="px-6 py-3">
                            E-mail
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Téléphone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date de création
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className=" border-b bg-color-grey border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                {user.id}
                            </th>
                            <td className="px-6 py-4">
                                {user.nom} 
                            </td>
                            <td className="px-6 py-4">
                            {user.prenom}
                            </td>
                            <td className="px-6 py-4">
                                {user.email}
                            </td>
                            <td className="px-6 py-4">
                                {user.telephone}
                            </td>
                            <td className="px-6 py-4">
                                {new Date(user.created_at).toLocaleDateString('fr-FR')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users;