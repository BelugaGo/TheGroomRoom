import React from 'react'
import { FooterContainer, FooterLogoBox, FooterLogoImg, FooterGrid, FooterColumn, FooterHeading, FooterLink } from './FooterElement';
import Logo from '../../Images/TheGroomRoomBlack.svg';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
   
    <FooterContainer maxWidth disableGutters>

        <FooterGrid container spacing={2} gap={2}>

        <FooterLogoBox>
            <FooterLogoImg src={Logo} alt='The Groom Room Logo' />
            <Typography id='logotext'>The Groom Room</Typography>
        </FooterLogoBox>

            <FooterColumn>
                <FooterHeading>ABOUT US</FooterHeading>
                <FooterLink to='/'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterColumn>
        


        
            <FooterColumn>
                <FooterHeading>CONTACT US</FooterHeading>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}><FooterLink to='/'>Contact</FooterLink></Link>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterColumn>
       

       
            <FooterColumn>
                <FooterHeading>SOCIAL MEDIA</FooterHeading>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterColumn>

        </FooterGrid>

        <Typography style={{ color: '#fd83cc', position: 'relative', top: '30px', display: 'flex', justifyContent: 'center', width: '100%', fontSize: '15px' }}>The Groom Room &copy; 2023</Typography>

     </FooterContainer>


  )
}

export default Footer