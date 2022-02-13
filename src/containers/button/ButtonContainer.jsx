import React from 'react';
import { Button } from 'evergreen-ui'
import { useFormContext } from 'hooks/useFormContext';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  margin: 0 12%;
  justify-content: flex-end;

  button {
    margin-left: 10px;
  }
`

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



const ButtonContainer = ({ formikProps, submit, values }) => {
  const { steps: { step, prev, next }, state: { subgenre } } = useFormContext();

  const isNextDisabled = () => {
    if (step === 1) {
      return !values.genre
    }
    if (step === 2) {
      return !values.subgenre
    }
    if (step === 3) {
      return !values.newSubgenreName
    }
  }

  return (
    <StyledContainer>
      <Button
        iconBefore="chevron-left"
        height={40}
        onClick={() => prev(subgenre === 'newSubgenre')}>
        Back
      </Button>
      {step < 4 && <StyledButton
        appearance="default"
        disabled={isNextDisabled()}
        height={40}
        onClick={() => next(subgenre === 'newSubgenre')}>
        Next
      </StyledButton>}
      {step === 4 && <StyledButton
        appearance="primary"
        type="submit"
        height={40}
        disabled={Object.keys(formikProps.errors).length > 0}
        onClick={submit}>
        Add
      </StyledButton>}
    </StyledContainer>
  )
}

export default ButtonContainer;