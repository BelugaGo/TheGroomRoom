import { Container, ImageList, ImageListItem, Box, styled, Typography, Paper, Card, Button } from "@mui/material";

export const HomeContainer = styled(Container)`
background-color: #5FBFF9;
position: relative;
height: 100%;
top: 0;
left: 0;
right: 0;
z-index: 1;
overflow: hidden;
`;

export const ImageLs = styled(ImageList)`
height: 100%;
margin: 0;
`;

export const ImageLsItem = styled(ImageListItem)`
height: 100%;
`;

export const HomeWrapper = styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: #fff;

@media screen and (max-width: 480px){
top: 30%;
    
}
`;

export const GroomSvg = styled('img')`
height: auto;
width: 90vw;


@media screen and (max-width: 480px){
width: 110vw;
}
`;

export const ScheduleButton = styled(Button)`
font-size: 2.5vh;
left: 50%;
transform: translate(-50%);
color: pink;
background-color: black;
white-space: nowrap;
font-family: 'Montserrat', sans-serif;
border-radius: 10px;
position: absolute;
top: 65%;

&:active {
transform: translateY(1px);
}

&:hover {
background-color: #5FBFF9;
}


@media screen and (max-width: 630px) {
top: 75%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 20px;
}

@media screen and (max-width: 320px) {

}
`; 