import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.h1`
  font-family: 'Irish Grover', sans-serif;
  color: white; 
  margin: 0; 
`;

const HeaderContainer = styled.div`
  background-color: #09308D; 
  padding: 10px; 
  top: 0; 
  z-index: 1000; 
  align-items: center; 
  justify-content: center; 
  border-bottom: 1px solid black;
`;

const Header = () => {
  return (
    <HeaderContainer>
      
      <StyledHeader>Passeio Carioca</StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
