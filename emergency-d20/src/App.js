import React, { useState } from 'react';
import styled from 'styled-components';


const RollButton = styled.button`
  height: 3em;
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const RollWrapper = styled.div`
height: 10em;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 1px red;
position: absolute;
right: 20em;
bottom: 20em;
`;

const Title = styled.div`
font-size: 4em;
position: absolute;
left: 3.25em;
border: solid 1px red;
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

  console.log(dieMin, 'd20 number')
    return (
    <>
        <Title>{title}</Title>
        <RollWrapper>
          <div>{dieMin}</div>
          <RollButton onClick={handleRoll}>Roll</RollButton>
        </RollWrapper>
    </>
  )
};

export default App;
