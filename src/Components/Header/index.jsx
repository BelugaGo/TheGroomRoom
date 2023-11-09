import React, { useLayoutEffect, useRef, useState } from 'react';
import { GroomRoomContainer, GroomWrapper, GroomLogo, GroomNavaigation, GroomLink, GroomButton, GroomLinkS, MobileBox, ListText } from './HeaderElement.jsx';
import logo from '../../Images/TheGroomRoom2.svg';
import { gsap } from "gsap";
import { TiThMenu } from 'react-icons/ti';
import { Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-scroll';
import { Link as LinkM } from 'react-router-dom';


function GroomHeader() {
  const comp = useRef();
  const fadein = useRef();

  const [open , setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(fadein.current.children,{opacity: 0, duration: 1, stagger: 0.2, ease: 'elastic.inOut(1, 0.5)', y: -30,})
    }, comp)
    return () => 
      ctx.revert();
    }, []); 

    const scrollTo = () => {
      setOpen(false); 
    }
  
  return (
    <>
    <GroomRoomContainer ref={comp} maxWidth disableGutters>
      <GroomWrapper>
      <GroomLink to='home' spy={true} smooth={true} offset={-70} duration={500}><GroomLogo src={ logo } alt="The Groom Room Logo" /></GroomLink>
      <GroomNavaigation ref={fadein}>
        <GroomLink to='home' spy={true} smooth={true} offset={-70} duration={500}><GroomButton>Home</GroomButton></GroomLink>
        <GroomLink to='about' spy={true} smooth={true} offset={-70} duration={500}><GroomButton>About</GroomButton></GroomLink>
        <GroomLink to='services' spy={true} smooth={true} offset={-70} duration={500}><GroomButton>Services</GroomButton></GroomLink>
        <GroomLink to='gallery' spy={true} smooth={true} offset={-70} duration={500}><GroomButton >Gallery</GroomButton></GroomLink>
        <GroomLinkS to='/contact' spy={true} smooth={true} offset={0} duration={500}><GroomButton>Contact</GroomButton></GroomLinkS>
        <GroomLinkS to='/book' spy={true} smooth={true} offset={0} duration={500}><GroomButton>Book</GroomButton></GroomLinkS>  
      </GroomNavaigation>
      </GroomWrapper>
    </GroomRoomContainer>


      {/* Mobile Menu */}
    <MobileBox>
    <Link onClick={handleOpen}><TiThMenu style={{ fontSize: '50px', color: '#FFF', cursor: 'pointer' }} /></Link>
        <Drawer open={open} onClose={handleOpen}>
          <div
            style={{ width: 250, height: '100%', backgroundColor: '#5FBFF9'}}
            role="presentation"
            onClick={handleOpen}
            onKeyDown={handleOpen}
          >
            <List>
              <Link to='home' spy={true} smooth={true} offset={10} duration={500}>
              <ListItem button>
                <ListText primary="Home" onClick={scrollTo} />
              </ListItem>
              </Link>
              <Link to='about' spy={true} smooth={true} offset={10} duration={500}>
              <ListItem button>
                <ListText primary="About" onClick={scrollTo} />
              </ListItem>
              </Link>
              <Link to='services' spy={true} smooth={true} offset={10} duration={500}>
              <ListItem button>
                <ListText primary="Services" onClick={scrollTo} />
              </ListItem>
              </Link>
              <Link to='gallery' spy={true} smooth={true} offset={10} duration={500}>
              <ListItem button>
                <ListText primary="Gallery" onClick={scrollTo} />
              </ListItem>
              </Link>
              <LinkM style={{ color: '#fff', textDecoration: 'none' }} to='/contact' spy={true} smooth={true} offset={0} duration={500}>
              <ListItem button>
                <ListText primary="Contact" />
              </ListItem>
              </LinkM>
              <LinkM style={{ color: '#fff', textDecoration: 'none' }} to='/book' spy={true} smooth={true} offset={0} duration={500}>
              <ListItem button>
                <ListText primary="Book" />
              </ListItem>
              </LinkM>
            </List>
          </div>
        </Drawer>
    </MobileBox>
</>
     

  )
}

export default GroomHeader;