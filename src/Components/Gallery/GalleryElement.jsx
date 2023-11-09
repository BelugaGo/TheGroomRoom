import { Box, Container, Typography, styled, Card, CardMedia, CardContent, Grid, Button  } from "@mui/material";

export const GalleryContainer = styled(Container)`
background-color: rgba(0, 0, 0, 1);

.icon {
    position: absolute;
    z-index: -1;
    color: #fd83cc;
    //top: 50%;
    right: 50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    height: 90px;
    width: auto;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
    //border: 3px solid orange
}

.fix {
    display: flex;
    justify-content: center;
    align-items: center;
}

`;

export const GalleryHeadingWrapper = styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 1rem;
`;

export const GalleryHeading = styled(Typography)`
font-family: 'roboto slab', sans-serif;
font-weight: 600;
font-size: 5.1vh;
color: #fd83cc;
text-transform: uppercase;
text-shadow:
0 0 40px rgba(255, 0, 153, .7),
0 0 70px rgba(255, 0, 153, .7),
0 0 130px rgba(255, 0, 153, .7);

@media screen and (max-width: 480px) {
    font-size: 2.7rem;
}
`;

export const GallerySubHeading = styled(Typography)`
font-family: 'roboto slab', sans-serif;
font-weight: 400;
font-size: 2.7vh;
color: #83c6fd;
text-transform: uppercase;
text-shadow:
0 0 40px rgba(131, 198, 253, .7),
0 0 70px rgba(131, 198, 253, .7),
0 0 130px rgba(131, 198, 253, .7);

@media screen and (max-width: 480px) {
    font-size: 1.3rem;
}
`;

export const BookN = styled(Button)`
font-size: 2.5vh;
color:  #fd83cc;
background-color: black;
white-space: nowrap;
position: relative;
top: 10rem;
font-family: 'Montserrat', sans-serif;
border: 1px solid #fff;
border-radius: 10px;

&:active {
transform: translateY(1px);
}

&:hover {
background-color: #5FBFF9;
}

@media screen and (max-width: 630px) {
font-size: 20px;
}
`;

export const Reveal = styled(Button)`  
font-size: 2.5vh;
color: #5FBFF9;
background-color: black;
white-space: nowrap;
width: max-content;
position: relative;
top: 10rem;
font-family: 'Montserrat', sans-serif;
border: 1px solid #fff;
border-radius: 10px;

&:active {
transform: translateY(1px);
}

&:hover {
background-color:  #fd83cc;
}

@media screen and (max-width: 630px) {
font-size: 20px;
}
`;

export const GalleryBox = styled(Grid)`
justify-content: center;
//border: 3px solid green;
`;

export const BoxPaw = styled(Box)`
position: relative;
right: 50%;
transform: translateX(-50%);
`;

export const GalleryCard = styled(Card)`
position: relative;
cursor: pointer;
overflow: scroll;
height: 60%;
border: 7px double #fd83cc; 
border-radius: 70px;
opacity: 0;
z-index: 2;


&:hover {
    opacity: 1;
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
}


@media screen and (max-width: 360px) {
    height: 30%;
}
`;

export const GalleryImg = styled(CardMedia)`
height: 70%;
`;

export const GalleryInfo = styled(CardContent)`
display: grid;
flex-direction: column;
gap: 10px;
`;

export const GalleryCustomer = styled(Typography)`
font-family: 'roboto slab', sans-serif;
font-weight: 600;
font-size: 1.5rem;

`;

export const GalleryReview = styled(Typography)`
font-family: 'roboto slab', sans-serif;
font-weight: 400;
font-size: 1.1rem;
`;

export const GalleryRating = styled(Typography)`
`;


