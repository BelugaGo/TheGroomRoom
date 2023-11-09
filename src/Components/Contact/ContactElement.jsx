import { Box, Button, Container, TextField, Typography, styled } from "@mui/material";
import TheGroomBg from '../../Images/TheGroomRoomBlack.svg';
import { Link } from "react-router-dom";

export const ContactUsContainer = styled(Container)`
display: flex;
gap: 1rem;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${TheGroomBg});
background-repeat: no-repeat;
background-size: cover;
overflow: hidden;
padding-bottom: 10px;
height: 100vh;

@media screen and (max-width: 480px) {
    height: 100%;
}

@media screen and (max-width: 320px) {
    height: 100%;
}

& .MuiOutlinedInput-root {
    & fieldset {
      border-color: #fff; 
    }
  }

  & .MuiInputLabel-root {
    color: #fd83cc;
  }


  & .MuiInputBase-input {
      //padding: 1.2rem;
      color: #fff;

        @media screen and (max-width: 480px) {
            //padding: 1rem;
        }
    }

    & .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: rgba(131, 198, 253, 1);
  }

  .alert {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      position: absolute;
      bottom: 50%;
      z-index: 1;
  }
`;

export const LogoHome = styled(Link)`
text-decoration: none;
//align-self: center;
//position: relative;
//top: 0;
//top: 1.5rem;
//left: 2rem;
//padding: 6rem 1rem;
cursor: pointer;
//background-color: red;


@media screen and (max-width: 480px) {
    //left: 5px;
}

&:active {
transform: translateY(1px);
}

& > img {
    width: 35px;
    height: auto;
    border-radius: 50%;

    @media screen and (max-width: 480px) {
    width: 30px;
}

    @media screen and (max-width: 320px) {
    width: 25px;
}

    @media screen and (max-width: 280px) {
    width: 20px;
}

}  

`;

export const ContactUsText = styled(Box)`
display: flex;
position: relative;
gap: 1rem;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;

& >:nth-child(n+2) {
font-size: 2.2vh;
font-family: 'Montserrat', sans-serif;
font-weight: 400;

    @media screen and (max-width: 320px) {
        font-size: 2.5vh;
    }
}

& >:nth-child(n+3) {
    font-size: 1.7vh;
 @media screen and (max-width: 480px) {
font-size: 1.6vh;
    }

    @media screen and (max-width: 320px) {
        font-size: 2vh;
    }

    @media screen and (max-width: 280px) {
        font-size: 1.4vh;
    }
}
`;

export const ContactUsHeading = styled(Typography)`
font-size: 5.5vh;
font-family: 'Montserrat', sans-serif;
font-weight: 700;

@media screen and (max-width: 480px) {
    font-size: 2.5rem;
}

@media screen and (max-width: 320px) {
    font-size: 2.1rem;
}

@media screen and (max-width: 280px) {
    font-size: 2rem;
}
`;

export const ContactUsPhone = styled(Typography)`
`;

export const ContactUsEmail = styled(Typography)`
`;

export const ContactUsAddress = styled(Typography)`

span {
    display: flex;
    justify-content: center;
    color: #fd83cc;
}
`;

export const ContactForm = styled(Box)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: column;
//border: 3px solid red;


@media screen and (max-width: 480px) {
//width: 100%;
}
& .MuiTextField-root {
    margin: 10px; 
}


   
`;

export const ContactTextField = styled(TextField)`
width: 60%;

@media screen and (max-width: 780px) {
width: 90%;
}
`;

export const ButtonS = styled(Button)`
font-size: 2.5vh;
color: pink;
width: 10rem;
background-color: black;
white-space: nowrap;
font-family: 'Montserrat', sans-serif;
border-radius: 10px;

&:active {
transform: translateY(1px);
}

&:hover {
background-color: rgba(131, 198, 253, 1);
}

`;

