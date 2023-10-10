import React from "react";

const Listing = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userFormData"));

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4"> Registration</h2>
      {storedUserData && (
        <div>
          <p>Name: {storedUserData.name}</p>
          <p>Email: {storedUserData.email}</p>
          <p>Username: {storedUserData.username}</p>
          <p>phone: {storedUserData.phone}</p>
          <p>address: {storedUserData.address}</p>
          <p>country: {storedUserData.country}</p>
          <p>state: {storedUserData.state}</p>
          <p> city: {storedUserData.city}</p>
          <p>portfolio: {storedUserData.portfolio}</p>
          <p> github: {storedUserData.github}</p>
          <p>website: {storedUserData.website}</p>
        </div>
      )}
    </div>
  );
};

export default Listing;
