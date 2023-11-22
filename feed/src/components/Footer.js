import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const StyledFooter = styled.footer`
  background-color: #09308D;
  color: white;
  width: 100%;
  text-align: left;
  height: 100px;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center; 
  padding: 0 ; 
  border-top: 1px solid black;
  & > div {
    text-align: left; 
  }
`;

const Logo = styled.img`
  width: 60px;
  margin-left: 39px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
  margin-right:11px;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
`;

const Ofer = styled.footer`
  margin-left: 11px; 
  margin-bottom: 15px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Ofer>
        <div>
          Um oferecimento:
        </div>
        </Ofer>
        <Logo src='../images/logo.jpg' alt='Logo' />
      </div>
      <div>
        <InfoContainer>
          <IconText>
            <FaFacebook size={30} />
             Passeio Carioca
          </IconText>
          <IconText>
            <FaInstagram size={30} />
            @PasseioCarioca
          </IconText>
          <IconText>
            <IoIosMail size={30} />
            passeiocarioca@email.com
          </IconText>
        </InfoContainer>
      </div>
    </StyledFooter>
  );
};

export default Footer;
