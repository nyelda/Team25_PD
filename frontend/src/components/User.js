import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal';
import styled from 'styled-components';
import { palette } from '../colors';

const EditProfileContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const EditButton = styled.button`
  background-color: ${palette.accent1};
  color: ${palette.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${palette.accent2};
  }
`;

function UserProfile() {
  const [userData, setUserData] = useState({
    name: 'Patrick Star',
    height: '100 cm',
    weight: '1000 kg',
  });

  // State to manage visibility of the EditProfile modal
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);

  const handleEditClick = () => {
    // Open the EditProfile modal
    setEditProfileModalOpen(true);
  };

  const handleSaveChanges = (updatedUserData) => {
    setUserData(updatedUserData);
    // Close the EditProfile modal
    setEditProfileModalOpen(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Height: {userData.height}</p>
      <p>Weight: {userData.weight}</p>

      {/* Edit Profile Container */}
      <EditProfileContainer>
        <EditButton onClick={handleEditClick}>Edit Profile</EditButton>
      </EditProfileContainer>

      {/* Render the EditProfile modal only when isEditProfileModalOpen is true */}
      {isEditProfileModalOpen && (
        <EditProfileModal userData={userData} onSaveChanges={handleSaveChanges} onClose={() => setEditProfileModalOpen(false)} />
      )}
    </div>
  );
}

export default UserProfile;