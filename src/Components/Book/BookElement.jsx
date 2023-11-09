import { Box, Button, Container, Select, TextField, Typography, styled } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";

export const BookContainer = styled(Container)` 
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%);
padding: 1rem;

.alert {
    position: absolute;
    bottom: 40%;
    width: max-content;
    align-self: center;
}

@media screen and (max-width: 480px) {
top: 0;
left: 0;
transform: translate(0, 0);
margin-right: 0;
width: 100%;
padding: 0;
}
`;

export const HomeButton = styled(Link)`
text-decoration: none;
cursor: pointer;
position: absolute;
left: 0;

@media screen  and (max-width: 360px){
    left: -20px;
}

& > img {
width: 47px;
height: auto;
border-radius: 50%;

    @media screen and (max-width: 480px) {
    width: 40px;
}

    @media screen and (max-width: 320px) {
        width: 35px;
    }

    @media screen and (max-width: 280px) {
        width: 30px;
    }
}
&:active {
transform: translateY(1px);
}

`;

export const BoxTitle = styled(Box)`
display: flex;
position: relative;
white-space: nowrap;
position: relative;
justify-content: center;
align-items: center;
`;

export const BookTitle = styled(Typography)`
text-align: center;
font-family: 'Roboto Slab';
font-weight: 700;
color: #000;



@media screen and (max-width: 280px) {
        font-size: 17px;
    }

  @media screen and (max-width: 280px) {
    
     & > :nth-child(1) {
        font-size: 0.8rem;
       
    }
}
`;

export const BoxForm = styled(Box)`
background-color: rgba(95, 191, 249, 0.5);
max-width: 90%;
border-radius: 10px;

position: relative;
display: flex;
flex-direction: column;
align-items: start;
padding: 1.8rem;


@media screen and (max-width: 480px) {
    border-radius: 0px;
}

> * {
       width: 100%;
       gap: 1rem;

   }

input {
    color: #fff;
}

textarea {
    color: #fff;
}
`;

export const FormTextField = styled(TextField)`

@media screen and (max-width: 780px) {
    
}

`;

export const BoxDateTime = styled(Box)`   
display: flex;
flex-direction: row;
align-items: center;
width: 100%;

@media screen and (max-width: 480px) {
  width: 100%;
}  
`;

export const SelectService = styled(Select)`
color: #fff;

@media screen and (max-width: 780px) {
    width: 100%;
    
    
}
`;

export const SubmitButton = styled(Button)`
margin: 0 auto;
width: 50%;
background-color: #fff;

@media screen and (max-width: 480px) {
    
}

&:active {
transform: translateY(1px);
}

&:hover {
color: #fff;
background-color: #000;
}
`;

export const TimePickerF = styled(TimePicker)`

input {
    color: #fff;
}

@media screen and (max-width: 480px) {
    
}
`;

export const DatePickerF = styled(DatePicker)`

input {

    color: #fff;
}
`;


