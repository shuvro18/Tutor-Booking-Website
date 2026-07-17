import React from 'react';
import { getUsers } from '../lib/data';
import SingleUser from '../components/SingleUser';

const TutorPage = async() => {
    const users =await getUsers();

    return (
        <div className='max-w-7xl mx-auto mb-12'>
            <h1 className='text-center bg-slate-50 dark:bg-zinc-950 text-3xl font-semibold py-9'>All Available Tutors</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    users.map(user => <SingleUser key={user._id} user={user}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default TutorPage;