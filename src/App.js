import React from 'react';
import AddBookContainer from 'containers/add-book/AddBookContainer';
import styled, { createGlobalStyle } from 'styled-components';
import { FormProvider } from 'context/FormProvider';
import { useStep } from 'hooks/useStep';

const GlobalStyle = createGlobalStyle`
  body, *, *::before, *::after {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 14px;
  }
`
const StyledWrapper = styled.div`
  width: 60%;
  padding: 40px;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 20px;
  @media (max-width: 997px) {
    width:90%;
  }
`;

function App() {
  const steps = useStep();

  return (
    <StyledWrapper>
      <FormProvider steps={steps}>
        <GlobalStyle />
        <AddBookContainer />
      </FormProvider>
    </StyledWrapper>
  );
}

export default App;
