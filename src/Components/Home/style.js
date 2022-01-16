import styled from 'styled-components';
import Back from '../../Assets/Bg1.png';

export const Container = styled.div`
  display: flex;
  margin-left: ${({ flex }) => !flex && '50px'};
  flex-direction: ${({ flex }) => !flex && 'column'};
  gap: 30px;
  
`;

export const Background = styled.div`
  background-image: linear-gradient(
      108.08deg,
      #0c1323 0.43%,
      rgba(12, 19, 35, 0.6) 100%
    ),
    url(${Back});
  background-size: 100% 100%;
  width: 100%;
  height: 90vh;
`;

export const Title = styled.div`
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 75px;
  /* or 78% */

  color: #ffffff;
  width: 616px;
  height: 146px;
  margin-top: 100px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 239px;
  height: 55px;
  background: ${({ fill }) => (fill ? '#f62221' : '')};
  color: #fff;
  border: 2px solid #f62221;
  box-shadow: 0px 16px 24px rgba(246, 34, 33, 0.2),
    0px 2px 6px rgba(246, 34, 33, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 55px;
  cursor: pointer;
`;

Title.Description = styled.div`
  width: 519px;
  height: 43px;
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  /* or 156% */
  margin-top: 39px;
  color: #bababd;
`;
