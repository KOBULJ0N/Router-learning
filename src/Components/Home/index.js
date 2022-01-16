import React from 'react';
import { Background, Title, Container, Button } from './style';

export const Home = () => {
  return (
    <div>
      <Background>
        <Container>
          <Title>New life for your car</Title>
          <Title.Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            explicabo aperiam et! Atque in aspernatur neque corrupti? Magnam
            praesentium
          </Title.Description>
          <Container flex>
            <Button fill>Choose a service</Button>
            <Button>Select brand - model</Button>
          </Container>
        </Container>
      </Background>
    </div>
  );
};
export default Home;
