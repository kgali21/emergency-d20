import React, { useState } from 'react';
import styled from 'styled-components';
import noNumberDie from './images/noNumberDie.jpg'


const RollButton = styled.button`
  height: 3em;
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6em;
  zIndex: 1;
  position: absolute;
  top: 21em;
`;

const RollWrapper = styled.div`
  height: 30em;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px blue;
  position: absolute;
  right: 40em;
  top: 15em;
`;

const Title = styled.div`
  font-size: 4em;
  position: absolute;
  left: 8.5em;
  border: solid 1px red;
  margin-top: 1em;
  margin-bottom: 2em
`

const rollD20 = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const App = () => {
  const [dieMin, setDieMin] = useState(1);

  const handleRoll = () => {
    setDieMin(rollD20(20, 1))
  }

  const title = `Marys' (Emergency) D20`

    return (
    <>
        <Title>{title}</Title>
        <RollWrapper>
          <img src={noNumberDie} alt={'dfasdf'} style={{ height: '20vh', width: '10vw', zIndex: '-1', position: 'absolute' }}/>
          <div style={{zIndex: 1, position: 'absolute', marginBottom: '.15em', fontSize: '2.5em', marginRight: '.06em'}}>{dieMin}</div>
          <RollButton onClick={handleRoll}>Roll</RollButton>
        </RollWrapper>
    </>
  )
};

export default App;