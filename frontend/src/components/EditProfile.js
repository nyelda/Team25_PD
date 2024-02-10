import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from '../colors';

function EditProfile({ userData, onSaveChanges }) {
  // Initialize editedUserData with userData as initial state
  const [editedUserData, setEditedUserData] = useState(userData);

  // Update editedUserData when userData changes (props update)
  useEffect(() => {
    setEditedUserData(userData);
  }, [userData]);

  const handleInputChange = (e) => {
    // Update the editedUserData when input values change
    setEditedUserData({
      ...editedUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    // Call onSaveChanges with the updated user data
    onSaveChanges(editedUserData);
  };

  return (
    <EditProfileWrapper>
      <h2>Edit Profile</h2>
      <FormLabel>
        Name:
        <FormInput
          type="text"
          name="name"
          value={editedUserData ? editedUserData.name : ''}
          onChange={handleInputChange}
        />
      </FormLabel>
      <FormLabel>
        Height:
        <FormInput
          type="text"
          name="height"
          value={editedUserData ? editedUserData.height : ''}
          onChange={handleInputChange}
        />
      </FormLabel>
      <FormLabel>
        Weight:
        <FormInput
          type="text"
          name="weight"
          value={editedUserData ? editedUserData.weight : ''}
          onChange={handleInputChange}
        />
      </FormLabel>
      <SaveButton onClick={handleSaveClick}>Save Changes</SaveButton>
    </EditProfileWrapper>
  );
}

export default EditProfile;

const EditProfileWrapper = styled.div`
  background-color: ${palette.primary};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  margin-top: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${palette.accent2};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 3px;
  border: 1px solid ${palette.accent2};
  border-radius: 10px;
`;

const SaveButton = styled.button`
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