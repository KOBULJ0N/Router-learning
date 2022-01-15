import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/loogo.svg';

export const Wrapper = styled.div`
  display: flex;
  background-color: #2f1793;
  text-align: center;
  align-items: center;
  font-family: sans-serif;
  justify-content: space-around;
`;

export const Items = styled.div`
  font-size: 25px;
  color: #eee;
  font-weight: 700;
  cursor: pointer;
`;

export const Loogo = styled(Logo)`
  width: 150px;
  margin-left: -50px;
`;

