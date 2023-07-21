import React, {ReactNode} from 'react';
import {Simulate} from "react-dom/test-utils";
import stalled = Simulate.stalled;
import styled from "styled-components";
import {Card} from "./Components/styles/Card.styled";
import {Button} from "./Components/styles/Button.styled";
import Image from './Rectangle 1.svg';
import {CardImg} from "./Components/styles/CardImg.styled";
import {H1, Text} from "./Components/styles/Content.styled";



function App() {
    return (
        <body>
        <div>
            <Box>
                <Card>
                    <CardImg src={Image} alt="my image" />
                    <H1>Headline</H1>
                    <Text>Faucibus. Faucibus. Sit sit sapien {'\n'} sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <Button btnType={'outlined'}>See more</Button>
                    <Button btnType={'primary'}>Save</Button>
                </Card>
            </Box>
        </div>
        </body>
    );
}


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }
`

export default App;
