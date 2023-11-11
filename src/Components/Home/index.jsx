import React, { useLayoutEffect, useRef, useState } from 'react';
import { HomeContainer, ImageLs, ImageLsItem, HomeWrapper, GroomSvg, ScheduleButton } from './HomeElement.jsx';
import { gsap } from 'gsap';
import Groom1 from '../../Images/Groom1.jpg';
import Groom2 from '../../Images/Groom2.jpg';
import Groom3 from '../../Images/Groom3.jpg';
import Groom4 from '../../Images/Groom4.jpg';
import GroomTitle from '../../Images/NewTheGroomRoom.svg';
import TheGroomRoom from '../../Images/TheGroomRoom.svg';
import { Link } from 'react-router-dom';

function Home() {

const imageRefs = useRef([]);

function srcset(image, size) {
  return {
    src: `${image}?w=${size}&h=${size}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size}&h=${size}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const imageItems = [
    {
      img: `${Groom1}`,
      title: 'Groom 1',
      rows: 2,
      cols: 1
    },
    {
      img: `${Groom2}`,
      title: 'Gorom 2',
      rows: 2,
      cols: 2
    },
    {
      img: `${Groom3}`,
      title: 'Groom 3',
      rows: 1,
      cols: 3
    },
    {
      img: `${Groom4}`,
      title: 'Groom 4',
      rows: 3,
      cols: 1
    },
    {
      img: `${TheGroomRoom}`,
      title: 'GroomRoomLogo',
      rows: 3,
      cols: 2
    },
  ];


  useLayoutEffect(() => {
    const tl = gsap.timeline( {defaults: {duration: 0.3} });

    let ctx = gsap.context(() => {

    imageRefs.current.forEach((imageRef) => {
      imageRef.onload = () => {
        tl.from(imageRef, {
          opacity: 0,
          stagger: 0.2,
          ease: 'power4.inOut(1, 0.5)',
          x: -500
        })
      };
    });
    gsap.from('.GroomTitle,.ScheduleButton', {  opacity: 0, duration: 1, ease: 'circ', y: 500, delay: 1.5})

  });
      return () =>
      ctx.revert();

  }, []);


  return (
    
    <HomeContainer maxWidth disableGutters id='home'>
        <ImageLs variant='quilted' col={4} rowHeight={150}>
  
      {imageItems.map((item, index) => (
        <ImageLsItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img ref={(el) => (imageRefs.current[index] = el)}
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageLsItem>
      ))}
        </ImageLs>

    <HomeWrapper>
      <GroomSvg className='GroomTitle' src={GroomTitle} loading='lazy'/>
      <Link to='/book'><ScheduleButton className='ScheduleButton'>Book Now!</ScheduleButton></Link>
    </HomeWrapper>
    </HomeContainer>
  )
}

export default Home;