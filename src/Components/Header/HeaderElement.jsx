import { Container, styled, Box, Button, ListItemText } from "@mui/material";
import { Link } from 'react-scroll';
import { Link as LinkS } from 'react-router-dom';

export const GroomRoomContainer = styled(Container)`
position: sticky;
top: 0;
left: 0;
right: 0;
z-index: 999;
overflow: hidden;
height: 70px;
padding: 10px;
background-color: rgb(0, 0, 0, 0.9);

@media screen and (max-width: 762px) {
    display: none;
    position: relative;
}
`;

export const GroomWrapper = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const GroomLogo = styled('img')`
    width: 50px;
    height: auto;
    margin: 0 0.3rem;
    border-radius: 70%;
    cursor: pointer;
`;

export const GroomNavaigation = styled('nav')`
width: 50%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
width: 60%;
`;

export const GroomLink = styled(Link)`

#book {
background-color: #599ea3;
font-family: 'Roboto Slab';
font-weight: 600;

&:hover {
background-color: #4c7c82;

 }
}
`;

export const GroomLinkS = styled(LinkS)`

& > *:nth-child(1) {
color:#fd83cc;
}
`;

export const GroomButton = styled(Button)`
color: #f3f3f3;
border-radius: 5px;
transition: background-color 0.3s ease, box-shadow 0.3s ease;
font-family: 'Roboto', sans-serif;
font-weight: 500;
transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

&:hover {
background-color: #4c7c82;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
transform: translateY(-5px);
}
`;

export const MobileBox = styled(Box)`
position: sticky;
width: 60px;
top: 15px;
left: 15px;
height: 0px;
z-index: 2;

@media screen and (min-width: 762px) {
display: none; 
}
`;

export const ListText = styled(ListItemText)`

.MuiListItemText-primary {
font-size: 30px;
font-family: 'Big Shoulders Text', cursive; 
}
`;