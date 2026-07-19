import React from 'react';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';
import { getUserCollection } from '../lib/data';

const UserAddedData = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user?.email
    // console.log(user);
    
    const userData = await getUserCollection(user);
    console.log(userData)

    return (
        <div>
            {userData.length}
        </div>
    );
};

export default UserAddedData;