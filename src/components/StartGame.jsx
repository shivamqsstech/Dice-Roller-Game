import React from 'react'
import styled from 'styled-components';
import dices from '../images/dice/dices.png'

const StartGame = ({toggle}) => {

  return (

    <Container>
        <div>
        <img src={dices} alt="" />

        </div>
        <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width:1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content{
    h1{
        font-size: 46px;
        white-space: nowrap;
    }
}

`
const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;

    }

`