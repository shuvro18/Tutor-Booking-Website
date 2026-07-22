// 'use client';

// import React, { useTransition } from 'react';
// import { bookSlotAction } from "../lib/actions";

// const BookButton = ({ user, userId }) => {
//     const [isPending, startTransition] = useTransition();

//     // হিসাব: Total Slot - Booked Slots
//     const totalSlot = user?.totalSlot || 0;
//     const bookedSlots = user?.bookedSlots || 0;
//     const remainingSlots = totalSlot - bookedSlots;

//     const handleBooking = () => {
//         if (!userId) {
//             alert("Please login first to book a session!");
//             return;
//         }

//         startTransition(async () => {
//             const result = await bookSlotAction({
//                 tutorId: user?._id,
//                 userId: userId,
//             });

//             alert(result.message);
//         });
//     };

//     return (
//         <div>
//             <button 
//                 disabled={isPending || remainingSlots <= 0} 
//                 onClick={handleBooking} 
//                 className="w-full bg-slate-900 dark:bg-teal-600 text-white dark:text-zinc-100 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-teal-700 active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
//             >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//                 {isPending
//                     ? 'Booking...'
//                     : remainingSlots > 0
//                         ? 'Book Session Now'
//                         : 'Fully Booked'}
//             </button>
//         </div>
//     );
// };

// export default BookButton;