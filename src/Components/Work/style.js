import styled from 'styled-components';

import Content1 from '../../Assets/News2.png';
import Content2 from '../../Assets/News3.png';

export const Wrapper = styled.div`
  display: flex;
`;

export const Img1 = styled.div`
  background-image: linear-gradient(
      360deg,
      rgba(8, 8, 8, 0) 0%,
      rgba(8, 8, 8, 0.666667) 59.9%,
      #080808 100%
    ),
    url(${Content1});

  background-size: 100% 100%;
  width: 960px;
  height: 540px;
`;

export const Img2 = styled.div`
  background-image: linear-gradient(
      360deg,
      rgba(8, 8, 8, 0) 0%,
      rgba(8, 8, 8, 0.666667) 59.9%,
      #080808 100%
    ),
    url(${Content2});

  background-size: 100% 100%;
  width: 960px;
  height: 540px;
`;

export const Text = styled.div`
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  /* text-align: center; */

  color: #ffffff;
`;

Text.Desc = styled.div`
  width: 406px;
  height: 68px;
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  color: #ffffff;
`;
Text.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 350px;
  margin-top: 25px;
  /* align-items: flex-end; */
`;
