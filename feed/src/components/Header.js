import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.h1`
  font-family: 'Irish Grover', sans-serif;
  color: white; 
  margin: 0; 
`;

const HeaderContainer = styled.div`
  background-color: #6990F4; 
  padding: 10px; 
  top: 0; 
  z-index: 1000; 
  align-items: center; 
  justify-content: center; 
`;

const Header = () => {
  return (
    <HeaderContainer>
      
      <StyledHeader>Passeio Carioca</StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
