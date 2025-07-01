import React from 'react';
import { User } from '../shared/types';

interface UserProfileProps {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, loading, error }) => {
  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user?.name || 'No name provided'}</p>
      {}
      {user?.photo && <img src={user.photo} alt={`${user.name}'s photo`} width={100} />}
      <p>Email: {user?.email}</p>
      <p>Start Balance: {user?.startBalance}</p>
    </div>
  );
};

export default UserProfile;
