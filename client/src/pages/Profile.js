import React from "react";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  if (!user) return <div className="p-8">Please log in to view your profile.</div>;

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-white rounded shadow p-6">
        <div className="mb-2">
          <span className="font-semibold">Username:</span> {user.username}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </div>
      </div>
    </div>
  );
}

export default Profile;