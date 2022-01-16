import React from 'react';
import { Container } from '../News/style';

import { Wrapper, Img1, Img2, Text } from './style';

export const Work = () => {
  return (
    <div>
      <Wrapper>
              <Img1>
                  <Text.Wrapper>

          <Text>Mercedes Benz V-Class</Text>
          <Text.Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
            voluptates vitae? Quaerat dolorem possimus voluptatem,
          </Text.Desc>
                  </Text.Wrapper>
        </Img1>
              <Img2>
                  <Text.Wrapper>
                      
          <Text>Mercedes Benz V-Class 222</Text>
          <Text.Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
            voluptates vitae? Quaerat dolorem possimus voluptatem,
          </Text.Desc>
                   </Text.Wrapper>
        </Img2>
      </Wrapper>
    </div>
  );
};
