import React from "react";
import AddUser from "./AddUser";
import { useParams } from "react-router";

function UpdateUser() {
  const { id } = useParams();

  const userData = {
    fullName: "Test User 4",
    age: 32,
    email: "test4@example.com",
    phone: "1234567890",
    isActive: false,
    gender: "female",
    address: {
      zip: "123456",
      city: "Test City",
      state: "TS",
      street: "101 Test St",
      country: "Test Country",
    },
    preferences: {
      darkMode: false,
      language: "english",
      newsletterSubscribed: true,
    },
    hobbies: ["testing", "coding"],
    education: [
      {
        year: 2023,
        degree: "Test Degree",
        stream: "Testing",
        institute: "Test University",
      },
    ],
    socialProfiles: {
      github: "https://github.com/test4",
      twitter: "https://twitter.com/test4",
      linkedIn: "https://linkedin.com/in/test4",
    },
  };

  const handleUpdate = (e) => {
    console.log("Update user", e);
  };

  return (
    <>
      <AddUser
        pageTitle="Update Vivek"
        handleUpdate={handleUpdate}
        userData={userData}
      />
    </>
  );
}

export default UpdateUser;
