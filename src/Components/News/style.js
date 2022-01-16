import styled from 'styled-components';

import Back from '../../Assets/Bg1.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 50px;
`;

export const Background = styled.div`
  background-image: linear-gradient(
      108.08deg,
      #0c1323 0.43%,
      rgba(12, 19, 35, 0.6)
    ),
    url(${Back});
  background-size: 100% 100%;
  width: 100%;
  height: 500px;
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

Title.Description = styled.div`
  width: 519px;
  height: 43px;
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  /* or 156% */
  color: #bababd;
`;


