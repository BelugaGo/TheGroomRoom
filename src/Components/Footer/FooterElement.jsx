import { Box, Container, Typography, styled, Grid } from "@mui/material";

export const FooterContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
background-color: #e0f2e9;
overflow: hidden;
text-align: center;


@media screen and (max-width: 480px) {
text-align: center;
}
`;

export const FooterLogoBox = styled(Box)`

#logotext {
font-family: 'Montserrat', sans-serif;
font-size: 12px;
font-weight: 700;
color: #fd83cc;
white-space: nowrap;

@media screen and (max-width: 480px) {
font-size: 10.5px;
 }
}
`;

export const FooterLogoImg = styled('img')`
border-radius: 50%;
border: 3px solid rgba(131, 198, 253, 1);
width: 5rem;
height: auto;

@media screen and (max-width: 320px) {
width: 4.9rem
}
`;

export const FooterGrid = styled(Grid)`
width: 100%;
height: 100%;
justify-content: space-evenly;
align-items: center;
 
`;

export const FooterColumn = styled(Grid)`
`;

export const FooterHeading = styled(Typography)`
font-size: 2.3vh;
font-weight: 700;
white-space: nowrap;
font-family: 'Montserrat', sans-serif;
`;

export const FooterLink = styled(Typography)`
font-size: 2vh;
font-family: 'Montserrat', sans-serif;
line-height: 1.7rem;
`;




