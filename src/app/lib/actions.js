"use server";

import { revalidatePath } from "next/cache";

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
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/my-tutors");
  }
  return data;
};

export const updateUser = async (userId, newUser) => {
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  if (data.modifiedCount > 0) {
    revalidatePath("/my-tutors");
  }
};
