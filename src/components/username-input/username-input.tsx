import React, { useState } from 'react';
import { StyledUsernameInputWrapper } from './styles';

type UserNameInputProps = { name: string; onChange: (name: string) => void };

export const UsernameInput = ({ name, onChange }: UserNameInputProps): JSX.Element => {
  const [nameInput, setNameInput] = useState(name);

  const handleNameChange = () => {
    if (nameInput.trim() !== name) {
      onChange(nameInput.trim());
    }
  };

  return (
    <StyledUsernameInputWrapper>
      <input
        type="text"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
        onBlur={handleNameChange}
        placeholder="Your name"
      />
      <span>(Set your name)</span>
    </StyledUsernameInputWrapper>
  );
};
