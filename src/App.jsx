import { useState } from 'react';
import './App.css'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted,setIsGameStarted ]= useState(false);

  const togglePlay = ()=>{
    setIsGameStarted((prev)=>!prev);
  };

  return (
    <>
    

    {
      isGameStarted ? <GamePlay/> :<StartGame toggle = {togglePlay}/> 
    }
    
     
  
    </>
  )
}

export default App;
