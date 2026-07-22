"use client"
import React from 'react';
import { Trash } from 'lucide-react';

const DeleteBooking = ({deleted, id}) => {
    console.log(id)
    const handle =async (id)=>{
        await deleted(id)
    }
    return (
        <button onClick={()=>{handle(id)}} className="text-rose-600 dark:text-rose-400 hover:text-rose-700 font-semibold text-sm transition-all hover:underline cursor-pointer">
            <Trash></Trash>
        </button>
    );
};

export default DeleteBooking;