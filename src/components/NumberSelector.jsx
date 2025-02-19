import React, { useState } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber }) => {
    const arrNumber = [1,2,3,4,5,6];
    console.log(selectedNumber);

    const handleSelection= (value)=>{
        setSelectedNumber(value);

        if (error) {
            setError(""); 
        }
    }
  return (
    <NumberSelectorContainer>
        <p className='error_p'>{error}</p>
    <div className='flex'>
        {
            arrNumber.map((value,i)=>(
                <Box key={i} $isSelected={value===selectedNumber} onClick={()=>handleSelection(value) }>{value}</Box>
            ))
        }
    </div>

    <div className='bottom_row'>
                <p className='bottom_p'>Select Number</p> 
            </div>

        </NumberSelectorContainer>
  )
}

NumberSelector.propTypes = {
    selectedNumber: PropTypes.number,
    setSelectedNumber: PropTypes.func.isRequired,
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`


.flex{
    display: flex;
    gap: 18px;
    margin-bottom: 0;
}

.error_p{
    color: red;
}
.bottom_row {
        display: flex;
        justify-content: flex-end; /* Aligns content to the right */
        width: 100%;
        margin-top: 10px;
    }

.bottom_p{
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 0 0;

}

`

const Box = styled.div`
line-height: 1px;
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>(props.$isSelected? "black": "white")};
color:  ${(props)=>(!props.$isSelected? "black": "white")};

`