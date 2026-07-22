export const getUsers = async()=>{
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data
}

export const getSingleTutor = async (userId)=>{
    const res = await fetch(`http://localhost:5000/users/${userId}`);
    const data = await res.json();
    return data 

}


export const getUserCollection = async (email)=>{
    const res = await fetch(`http://localhost:5000/my-tutors/${email}`);
    const data = await res.json();
    return data 

}

export const getBooking = async (bookingData)=>{
    const res = await fetch(`http://localhost:5000/booking/${bookingData}`);
    const data = await res.json();
    return data 

}