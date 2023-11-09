import { Box, CardMedia, Container, Typography, styled } from "@mui/material";
import TheGroomRoom from '../../Images/TheGroomRoomBlack.svg';

export const AboutContainer = styled(Container)`
display: flex;
padding: 10px;
flex-direction: column;
background-image: url(${TheGroomRoom});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
overflow: hidden;

`;

export const AboutWrapper = styled(Box)`
padding: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 480px){
    align-items: center;
}
`;

export const AboutTitle = styled(Typography)`
font-family: 'Roboto Slab'; 
font-weight: 600;
font-size: 2.3vh;
color: #fff;
font-family: 'Roboto Slab', serif;

@media screen and (max-width: 700px){
    //text-align: left;
    width: 90%;
    
}

@media screen and (max-width: 480px){
    font-size: 1.9vh;
    width: 100%;
}
`;

export const AboutStory = styled(Typography)`
font-family: 'Roboto Slab';
color: #fff;
text-align: left;
width: 80%;

@media screen and (max-width: 980px){
    width: 100%;
    font-size: 1.6vh;
}
`;

export const Team = styled(Box)`
position: relative;
width: 100%;
//margin: 0 auto;
display: flex;
//gap: 50px;
//padding: 15px;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(255, 255, 255, 0.3);
border-radius: 10px;
//margin: 0 auto;
overflow: hidden;
//border: 3px solid red;



.swiper {
    width: 42rem;
    border-radius: 10px;
    //border: 3px solid red;

    @media screen and (max-width: 780px){
      width: 100%;
    }

}

.swiper-slide {
   position: relative; 
   padding: 10px;
   border-radius: 10px;
   //height: 400px;
   margin-left: -10px;

    @media screen and (max-width: 320px){
     padding: 5px;
     margin-left: -7px;
     //height: 300px;
    }
}

.swiper-slide img {
    //position: relative;
    transform:scale(0.7);
    transition: 0.5s ease-out;
    border-radius: 10px;
}

.swiper-slide-active img {
    transform: scale(1); /* Adjust the scale factor for the zoom level */
  transition: transform 0.5s ease-in;
    
}


.swiper-button-prev {
    background-color: #fff;
    color: #000;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    scale: 0.9;
    transition: 0.3s ease-in-out;
    box-shadow: 10px 10px 77px 0px rgba(0,0,0,0.31);
   -webkit-box-shadow: 10px 10px 77px 0px rgba(0,0,0,0.31);
   -moz-box-shadow: 10px 10px 77px 0px rgba(0,0,0,0.31);
  
    &:hover {
        color: pink;
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
       
    }

    &::before {
  content: '';
  position: absolute;
  top: 47%;
  right: 0;
  width: 0%;
  height: 3px; 
  background-color: pink; 
  border-radius: 10px;
  transition: 0.2s ease-in-out;
    }

    &:hover::before {
       width: 65%;
       transition: 0.1s ease-in;
    }

    @media screen and (max-width: 480px) {
        scale: 0.7;
    }
  
}

.swiper-button-next {
    background-color: #fff;
    color: #000;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    scale: 0.9;
    transition: 0.3s ease-in-out;
    box-shadow: 10px 10px 77px 0px rgba(0,0,0,0.31);
   -webkit-box-shadow: 10px 10px 77px 0px rgba(0,0,0,0.31);
   -moz-box-shadow: 10px 10px 77px 0px rgba(0,0,0,0.31);
  
    &:hover {
        color: pink;
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
       
    }

    &::before {
  content: '';
  position: absolute;
  top: 47%;
  left: 0;
  width: 0%;
  height: 3px; 
  background-color: pink; 
  border-radius: 10px;
  transition: 0.2s ease-in-out;
    }

    &:hover::before {
       width: 65%;
       transition: 0.1s ease-in;
    }

    @media screen and (max-width: 480px) {
        scale: 0.7;
    }

  
}

`;

export const TeamTitle = styled(Typography)`
font-family: 'Big Shoulders Text', cursive; 
font-weight: 800;
font-size: 6.3vh;
color: #fff;
letter-spacing: 1px;
word-spacing: 3px;
color: #fd83cc;
text-transform: uppercase;
 text-shadow:
          0 0 40px rgba(255, 0, 153, .7),
          0 0 70px rgba(255, 0, 153, .7),
          0 0 130px rgba(255, 0, 153, .7);


@media screen and (max-width: 280px){
    font-size: 4.5vh;

}
`;

export const TeamPic = styled(CardMedia)`
`;

export const GroomTeam = styled('img')`
//width: 25rem;
//bottom: 12rem;
//position: absolute;
//height: 500px;
//width: 500px;
border: 3px solid red;
`;

export const TeamAbout = styled(Typography)`
//background-color: rgb(255, 255, 255, 0.3);
border-radius: 10px;
width: 100%;
font-family: 'Montserrat', sans-serif;
`;

export const TeamBox = styled(Box)`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(255,255,255,0.4);
border-radius: 10px;
padding: 25px;
width: 85%;
margin-bottom: 15px;
//height: 30rem;  

@media screen and (max-width: 480px){
//width: 80%; 
}
`;
