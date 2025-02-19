import React from 'react'
import styled from 'styled-components';
const TotalScore = ({score}) => {
    return (

        <ScoreContainer>
            <div>

            <h1>{score}</h1>
            <p>Total Score</p>

            </div>
        </ScoreContainer>
    ) 
}

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 250px;
/* background-color: #1a5858; */
text-align: center;
border: 1px solid black;
width: 100%;
height: fit-content;

h1{
    font-size: 100px;
    line-height: 10px;
}

p{
    font-size: 15px;
    font-weight: 500;
}
`
