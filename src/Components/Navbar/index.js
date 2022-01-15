import React from 'react';
import { Items, Loogo, Wrapper } from './style';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Loogo />
      <Items onClick={() => navigate('/')}>Home</Items>
      <Items onClick={() => navigate('/news')}>News</Items>
      <Items onClick={() => navigate('/work')}>Work</Items>
    </Wrapper>
  );
};
export default Navbar;
