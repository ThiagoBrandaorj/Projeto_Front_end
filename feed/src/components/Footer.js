import React from 'react';
import styled from 'styled-components';
import { FaFacebook , FaInstagram } from "react-icons/fa";
import { IoIosMail, IoMdColorFill } from "react-icons/io";

const StyledFooter = styled.footer`
  background-color: #6990F4;
  color: white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 100px;
`;

const Footer = () => {
  return (
    <StyledFooter>
        Contato: passeiocarioca@email.com
    
      &copy; 2023 Meu Site
      <FaFacebook size={50}/>
      <FaInstagram size={50}/>
      <IoIosMail/>
    </StyledFooter>
  );
};

export default Footer;
