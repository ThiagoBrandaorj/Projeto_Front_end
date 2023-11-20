import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #6990F4;
  color: white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
        Contato: 000-000/passeiocarioca@email.com
    
      &copy; 2023 Meu Site
    </StyledFooter>
  );
};

export default Footer;
