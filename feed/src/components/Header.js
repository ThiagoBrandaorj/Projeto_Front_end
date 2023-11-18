import React from 'react';
import './styles/Header.css'; 
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Meu Cabeçalho</h1>
      <FaSearch/>
    </div>
  );
};

export default Header;
