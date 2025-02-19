import React, { useState } from 'react'
import styled from 'styled-components';
import dice1 from "../images/dice/dice_1.png";
import dice2 from "../images/dice/dice_2.png";
import dice3 from "../images/dice/dice_3.png";
import dice4 from "../images/dice/dice_4.png";
import dice5 from "../images/dice/dice_5.png";
import dice6 from "../images/dice/dice_6.png";


const RoleDice = ({currentDice, roleDice }) => {

    const diceImages = {
        1: dice1,
        2: dice2,
        3: dice3,
        4: dice4,
        5: dice5,
        6: dice6,
      };

    

    // const generateRandomNumber = (min, max) => {
    //     return (Math.floor(Math.random() * (max - min) + min));
    //     // console.log(randomNumber); // Now it will print a correct random number
    //     // return randomNumber;

    // }

    // const roleDice = ()=>{
    //     const randomNumber = generateRandomNumber(1,7);
    //     setCurrentDice((prev)=>randomNumber);

    // }

    return (
        <DiceContainer>

            <div className='dice' onClick={ roleDice}>
                <img src={diceImages[currentDice]}  alt="" />
                {/* <img src={dice_1} alt="" /> */}
            </div>

            <p>Click On Dice To Roll</p>

            


        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.dice{
    cursor: pointer;
}

p{
    font-weight: 500;
}

`