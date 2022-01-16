import React from 'react';
import { Container, Title } from '../News/style';
import { Background } from './style';

export const News = () => {
  return (
    <div>
      <Background>
              <Container>
                  
          <Title>Latest News</Title>
          <Title.Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            inventore soluta minima distinctio quisquam qui in. Perspiciatis,
            rerum blanditiis delectus commodi voluptatem non repellendus,
            voluptas magni quam saepe iusto cumque.
          </Title.Description>
       </Container>
      </Background>
    </div>
  );
};

export default News;
