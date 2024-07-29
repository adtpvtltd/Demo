import React from 'react';
import styled from 'styled-components';
import DiamonRing from './image/diamondring.png'
import DiamondEarring from './image/diamon-earrings.png'
import forkids from './image/forkids.png'
import silverRing from './image/silverring.png'

const Container = styled.div`
  padding: 20px;
  font-family: 'Your Serif Font', serif;
  color: #333;
  margin-top: 5rem;
  background: ;
  padding-top:5rem; 
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'Your Serif Font', serif;
  color:black;
`;

const Description = styled.p`
  text-align: center;
  font-family: 'Your Serif Font', serif;
  color: #666;
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Column = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid black;
`;

const ColumnTitle = styled.h2`
  font-family: 'Your Sans-Serif Font', sans-serif;
  color: #333;
`;

const ColumnDescription = styled.p`
  font-family: 'Your Serif Font', serif;
  color: #666;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Layout = () => {
  return (
    <Container>
      <Title>TOP COLLECTION</Title>
      <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Description>
      <Grid>
        <Column>
          <Image src={DiamonRing} alt="Diamond Ring" />
          <ColumnTitle>FOR COUPLES</ColumnTitle>
          <ColumnDescription>Diamond Ring</ColumnDescription>
        </Column>
        <Column>
          <Image src={silverRing} alt="Resident Watch" />
          <ColumnTitle>FOR WOMEN</ColumnTitle>
          <ColumnDescription>Resident Watch</ColumnDescription>
        </Column>
        <Column>
          <Image src={DiamondEarring} alt="Branding Ring" />
          <ColumnTitle>FOR MEN</ColumnTitle>
          <ColumnDescription>Branding Ring</ColumnDescription>
        </Column>
        <Column>
          <Image src={forkids} alt="Manufacture Necklace" />
          <ColumnTitle>FOR KIDS</ColumnTitle>
          <ColumnDescription>Manufacture Necklace</ColumnDescription>
        </Column>
      </Grid>
    </Container>
  );
};

export default Layout;
