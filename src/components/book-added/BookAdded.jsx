import React from 'react';
import styled from 'styled-components';
import { Button } from 'evergreen-ui';
import { useFormContext } from 'hooks/useFormContext';
import image from '../../assets/check.png'
const StyledButton = styled(Button)`
  width: fit-content;

  background: #525a66;
  color: white;
  &&& {
    &:hover,
    :active,
    :focus {
      background: #525a66;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  justify-content: space-evenly;

`


const StyledImage = styled.img`
   width:150px;
   height:150px;
  
`;

const StyledText = styled.p`
  width: fit-content;
  margin-top:20px;
  margin-bottom:20px;
`

const BookAdded = ({ resetForm }) => {
  const { state, dispatch } = useFormContext();
  const resetFormHandler = () => {
    resetForm();
    dispatch({ type: 'setShowBookAdded', payload: false });
  }
  return (
    state.showBookAdded && (
      <StyledContainer>
        <StyledImage src={image} alt="Logo" />
        <StyledText>Book added successfully</StyledText>
        <StyledButton onClick={() => resetFormHandler()}>
          Add Another book
        </StyledButton>
      </StyledContainer>
    )
  );
};

export default BookAdded;
