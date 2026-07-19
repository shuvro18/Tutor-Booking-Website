import { redirect } from "next/navigation";

export const createUser = async (newUser) => {
  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();

  return data;
};

export const deleteUserData = async (userId) => {
    'use server';
    const res = await fetch(`http://localhost:5000/users/${userId}`,{
        method:'DELETE'
    })
    const data = await res.json();
        return data;
    
};
