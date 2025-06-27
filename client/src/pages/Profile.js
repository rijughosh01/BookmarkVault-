import React from "react";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  if (!user)
    return (
      <div className="p-8 text-center text-lg text-gray-500">
        Please log in to view your profile.
      </div>
    );

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Username:</span>{" "}
          <span className="text-gray-900">{user.username}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          <span className="text-gray-900">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;