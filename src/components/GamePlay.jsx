import React, { useState } from 'react'
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { OutlineButton } from '../styled/Button';
import { Button } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score , setScore] =useState(0) 
  const [error , setError] = useState("")
  const [showRules, setShowRules] = useState(false);



  const generateRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + min));
    // console.log(randomNumber); // Now it will print a correct random number
    // return randomNumber;

}

const handleReset = ()=>{
  setScore(0)
}

const roleDice = ()=>{
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    if(!selectedNumber) {
      setError("You have not selected any number")
      return;
    }

    setError("")

    if(selectedNumber === randomNumber){
      setScore((prev)=>prev + randomNumber);
    }
    else{
      setScore((prev)=>prev-2);
    }

    setSelectedNumber(undefined);
}
  return (
    <MainContainer>
        <div className='top_section'>

        <TotalScore score = {score}/>
        <NumberSelector error={error} setError ={setError} selectedNumber = {selectedNumber} setSelectedNumber={setSelectedNumber} />

        </div>

        <RoleDice currentDice ={currentDice} roleDice = {roleDice}  />

        <div className='btns'>
          <OutlineButton onClick={handleReset}>Reset</OutlineButton>
          <Button onClick={()=>setShowRules(prev =>!prev)}>{showRules ? "Hide": "Show"}</Button>

        </div>
        {
          showRules && <Rules></Rules>
        }
        
    </MainContainer>

  
)}

export default GamePlay;

const MainContainer = styled.main`
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
    /* justify-content: center; */
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}


`