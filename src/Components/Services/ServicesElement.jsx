import { Box, CardMedia, Container, styled, Card, CardContent, Typography, CardActions, Grid, Button } from "@mui/material";
import MobileBg from '../../Images/MobileBg.jpg';

export const ServicesContainer = styled(Container)`
position: relative;
z-index: 1;
overflow: hidden;

@media screen and (max-width: 480px) {
background-image: url(${MobileBg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}


.swiper {
    width: 100%;
    padding-bottom: 50px;
     @media screen and (min-width: 500px) {
      display: none;
     }
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    .special {
        box-shadow:
          0 0 30px rgba(255, 0, 153, .7),
          0 0 50px rgba(255, 0, 153, .7),
          0 0 10px rgba(255, 0, 153, .7);

    }

}

.swiper-slide img {


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

export const Video = styled('video')`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;   
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    @media screen and (max-width: 480px) {
       display: none;
    }
`;

export const ServicesHeader = styled(Typography)`
font-size: 7.3vh;
text-align: center;
font-family: 'Big Shoulders Text', cursive; 
font-weight: 800;
color: #fff;
letter-spacing: 1px;
word-spacing: 3px;
color: #fd83cc;
text-transform: uppercase;
text-shadow:
          0 0 40px rgba(255, 0, 153, .7),
          0 0 70px rgba(255, 0, 153, .7),
          0 0 130px rgba(255, 0, 153, .7);

@media screen and (max-width: 480px) {
    z-index: 10;
}
`;

export const ServiceIntro = styled(Typography)`
width: 90%;
font-family: 'Big Shoulders Text', cursive;
font-size: 2.3vh;
color: #fff;
margin: auto;
text-align: left;
padding-bottom: 50px;

@media screen and (min-width: 900px) {
    width: 70%;
}
`;

export const ServicesWrapper = styled(Grid)`
justify-content: center;
z-index: 1;

@media screen and (max-width: 480px) {
display: none;
}
`;

export const ServicesGrid = styled(Grid)`
display: flex;
justify-content: center;


.special {
    box-shadow:
          0 0 30px rgba(255, 0, 153, .7),
          0 0 50px rgba(255, 0, 153, .7),
          0 0 10px rgba(255, 0, 153, .7);

}
`;

export const ServicesCard = styled(Card)`
overflow: scroll;
height: 70%;
width: auto;
position: relative;

::-webkit-scrollbar {
    width: 0;
    height: 0;
}

@media screen and (max-width: 480px){

    
}

@media screen and (max-width: 600px) {
    width: 80%;
    
}

`;

export const CardImg = styled(CardMedia)`
height: 75%;


`;

export const CardInfo = styled(CardContent)`
position: relative;
`;

export const CardTitle = styled(Typography)`
font-family: 'Big Shoulders Text', cursive;
font-weight: 800;
font-size: 2.7vh;
`;

export const CardDescription = styled(Typography)`
text-align: left;
`;

export const CardButtton = styled(CardActions)`
position: relative;

.specialButton {
color: #fd83cc;
border: 1.5px solid #fd83cc;

@media screen and (max-width: 360px) {
    font-size: 10px;
    
}
}

.specialShare {
color: #fd83cc;

&:hover {
   
 }
}

`;

export const ButtonS = styled(Button)`

&:active {
transform: translateY(1px);
}

&:hover {
background-color: white

}

@media screen and (max-width: 480px){
    
    font-size: 12px;
}
`;

export const ShareSpan = styled('span')`
pointer-events: none;
position: absolute;
display: inline-block;
opacity: 1;
color: #1976D2;

font-family: 'roboto slab', sans-serif;
font-weight: 400;
font-size: 25px;
text-align: center;
transition: opacity 0.3s ease-in-out;

@media screen and (max-width: 280px) {
    
}
`;

export const SocialGroup = styled(Box)`
position: absolute;
right: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: #ececec;
width: 290px;
border-radius: 80px;
transition: all 0.3s ease-in-out;
transform: scale(0.7);

&:hover {
background-color: transparent;

& > * {
margin: 0 10px;
border-radius: 50%;
transition: 0.3s ease-out;
color: #fd83cc;
background-color: #ececec;
 }
 span {
transition: 0.3s ease-out;    
opacity: 0;
 }
}

.hover {
    background-color: orange;
  color: red; 
}
 
@media screen and (max-width: 880px) {
transform: scale(0.6);
right: -1.7rem;
}

 @media screen and (max-width: 360px) {
    right: -3.5rem;
    transform: scale(0.5);
 }

    @media screen and (max-width: 280px) {
      width: 240px;
      right: -3.1rem; 
    }

`;

export const SocialButton = styled(Button)`
display: inline-block;
margin: 0 -20px;
overflow: hidden;
line-height: 50px;
font-size: 25px;
color: transparent;
transition: all 0.3s ease-in-out;

&:hover {
-webkit-box-shadow: 10px 10px 32px -17px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 32px -17px rgba(0,0,0,0.75);
box-shadow: 10px 10px 32px -17px rgba(0,0,0,0.75);
}


&:nth-child(1) {
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      margin-left: 0;

      &:hover {
        background-color: #BC2A8D;
        color: white;
      }

}

&:nth-child(2) {
      
        &:hover {
            background-color: #3b5998;
            color: white;
        }
}

&:nth-child(3) {
      
        &:hover {
            background-color: #61c5ec;
            color: white;
        }
}


&:nth-child(4) {
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      margin-right: 0;

        &:hover {
            background-color: #E60023;
            color: white;
        }
}
`;