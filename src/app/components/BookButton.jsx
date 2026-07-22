"use client"

import { toast } from "react-toastify";
import { bookingUser } from "../lib/actions";

const BookButton = ({ tutor, user }) => {

    // availableTime: "Mon - Wed 4:00 PM - 6:00 PM"
    // experience: "Practicing physician offering comprehensive guidelines on clinical pathology."
    // hourlyFee: 52
    // institution: "Sher-e-Bangla Medical College"
    // location: "Barisal"
    // photoUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f0471?q=80&w=500&auto=format&fit=crop"
    // startDate: "2026-07-26"
    // subject: "biology"
    // teachingMode: "hybrid"
    // totalSlot: 23
    // tutorName:"Dr. Ronald Vance"
    // _id:"6a57eb426972601a9f1e2486"

    const { availableTime, experience, hourlyFee, institution, location, photoUrl, startDate, subject, teachingMode, totalSlot, tutorName } = tutor;

    const { email, name, image, id } = user;


    const handleBooking = async () => {
        const bookingData = {
            userId: id,
            image,
            tutorImage: photoUrl,
            name,
            email,
            tutorName,
            location,
            teachingMode,
            availableTime,
        }
        try {
            const sendBooking = await bookingUser(s);

            if(sendBooking && (sendBooking.insertedId)){
                toast.success("Booking successfully");
            }
        } catch (err) {
            console.log("This is error", err)
            toast.error("Network error. Please try again");
        }
    }
    return (
        <div>
            <button onClick={handleBooking} className="w-full bg-slate-900 dark:bg-teal-600 text-white dark:text-zinc-100 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-teal-700 active:scale-95 transition-all shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Session Now
            </button>
        </div>
    );
};

export default BookButton;