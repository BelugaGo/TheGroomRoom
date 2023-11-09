import React, { useState } from 'react'
import { GalleryContainer, GalleryHeadingWrapper, GalleryHeading, GallerySubHeading, GalleryBox, GalleryCard, GalleryCustomer, GalleryRating, GalleryImg, GalleryInfo, GalleryReview, BoxPaw, BookN, Reveal } from './GalleryElement';
import { Grid } from '@mui/material';
import {PiPawPrintFill} from 'react-icons/pi';
import Bunny from '../../Images/Bunny.jpg';
import Bunny2 from '../../Images/Bunny2.webp';
import Cat from '../../Images/Cat.jpg';
import Dog7 from '../../Images/Dog7.jpg';
import Dog2 from '../../Images/Dog2.jpg';
import Dog3 from '../../Images/Dog3.webp';
import Dog4 from '../../Images/Dog4.webp';
import Cat2 from '../../Images/Cat2.jpg';
import Dog6 from '../../Images/Dog6.jpg';
import Dog8 from '../../Images/Dog8.webp';
import { Link } from 'react-router-dom';



function Gallery() {

const [reveal, setReveal] = useState(0);
const [ButtonText, setButtonText] = useState('Reveal All');



const handleOpacityGallery = () => {
  setReveal(!reveal ? 1 : 0);
  setButtonText(!reveal ? 'Hide All' : 'Reveal All');
}



const groomGallery = [

  { image: `${Bunny}`,
    customer: 'Sarah T.',
    review: `I can't express how delighted I am with the pet grooming services at The Groom Room. My fur baby, Fluffy, has never looked so clean and adorable! The staff is friendly and attentive to both pet and owner. The grooming results speak for themselves - Fluffy's coat is shiny and beautifully trimmed. I highly recommend The Groom Room to all pet owners looking for top-notch care!`,
    rating: '⭐⭐⭐⭐⭐ (5/5)',

  },

  { image: `${Cat}`,
    customer: 'Emma J.',
    review: `Emma had a wonderful experience at The Groom Room. The staff here is not only professional but also caring. They made sure my furry friend, received the best grooming treatment. Kitty now looks and feels fantastic, and I couldn't be happier with the results.`,
    rating: '⭐⭐⭐⭐⭐ (5/5)',
  },

  { image: `${Dog8}`,
    customer: 'Robert D.',
    review: `I took my dog, Fido, to The Groom Room for the first time, and I'm extremely satisfied with their service. The groomers are skilled and attentive to every detail. Fido came back home looking dapper and smelling fresh. I highly recommend The Groom Room to all pet owners!`,
    rating: '⭐⭐⭐⭐⭐ (5/5)',
  },

  { image: `${Dog6}`,
  customer: 'John M.',
  review: `The Groom Room is a true gem for pet lovers! My dog, Buddy, always used to be anxious during grooming sessions, but the professional and caring staff at this salon made him feel right at home. They listened to my concerns and exceeded my expectations in terms of Buddy's grooming. He now looks forward to his spa day! Thanks, The Groom Room, for making Buddy look and feel fantastic!`,
  rating: '⭐⭐⭐⭐⭐ (5/5)',

  },

  { image: `${Dog4}`,
  customer: 'Olivia R.',
  review: `The Groom Room is my go-to place for pet grooming. My dog, Fluffy, is a regular here, and she always comes back looking adorable. The groomers handle her with care and make her feel comfortable throughout the process. If you want your pet to look their best, The Groom Room is the place to go.`,
  rating: '⭐⭐⭐⭐⭐ (5/5)',
  },

  { image: `${Cat2}`,
  customer: 'Lisa H.',
  review: `I've been bringing my cats to The Groom Room for years, and I couldn't be happier with the service. They handle my feline friends with such care and attention, and the grooming results are always purr-fect! From nail trims to fur maintenance, the team here does it all. I wouldn't trust anyone else with my beloved pets. The Groom Room is the best!`,
  rating: '⭐⭐⭐⭐⭐ (5/5)',

  },

  { image: `${Dog7}`,
  customer: 'Michael D.',
  review: `I've had my fair share of disappointing pet grooming experiences before discovering The Groom Room, but this place truly stands out. My dog, Max, is a bit of a handful, but the groomers here are patient and skilled. They pay attention to every detail, ensuring Max looks fantastic and smells great. The pricing is fair, and the service is exceptional. Thanks to The Groom Room for making Max a handsome pup!`,
  rating: '⭐⭐⭐⭐⭐ (5/5)',

  },

  { image: `${Dog2}`,
  customer: 'Harry T.',
  review: `Bringing my furry friends to 'The Groom Room' is like a scene out of a feel-good movie! The transformation of my dogs, Luna and Max, is nothing short of magical. The talented groomers turned my scruffy pups into canine celebrities. The level of care and attention to detail is like a blockbuster hit. Thanks to 'The Groom Room,' my pets are red-carpet ready every day!`,
  rating: '⭐⭐⭐⭐⭐ (5/5)',

  },

 { image: `${Bunny2}`,
  customer: 'Sarah P.',
  review: `The Groom Room' deserves an Oscar for their exceptional pet grooming services. My Bunny, Whiskers, used to be camera-shy before visiting this place. Now, she confidently struts her stuff, looking like a Hollywood star after each grooming session. The ambiance is tranquil, and the staff is as friendly as your favorite movie character. If you want your pets to feel like leading actors, this is the place to go!`,
  rating: '⭐⭐⭐⭐⭐ (5/5)',

  },

 { image: `${Dog3}`,
customer: 'David A.',
review: `I stumbled upon 'The Groom Room' like a hidden gem in a classic movie. My rambunctious dog, Rocky, needed a grooming miracle, and this place delivered. The groomers worked their magic, turning Rocky's messy appearance into a masterpiece. The attention to pet comfort and owner satisfaction is a plot twist I didn't expect but greatly appreciated. 'The Groom Room' is my go-to pet grooming destination for a happy ending every time!`,
rating: '⭐⭐⭐⭐⭐ (5/5)',

},

];

  return (
    <GalleryContainer maxWidth disableGutters id='gallery'>
      <GalleryHeadingWrapper p={1}>
        <GalleryHeading variant='h4'>Groom Gallery</GalleryHeading>
        <GallerySubHeading variant='h7'>Photos/Reviews From Our Satisfied Customers <br /> <span style={{ color: '#fff', fontSize: '2vh' }}>(Hover/Tap the Paws to reveal)</span></GallerySubHeading>
        <Link to='/book'><BookN>Book Now!</BookN></Link>
        <Reveal onClick={handleOpacityGallery}>{ButtonText}</Reveal>
      </GalleryHeadingWrapper>

      <GalleryBox container spacing={3} columns={{xs: 3, sm: 14, md: 10, lg: 9 }} p={3}>
        {groomGallery.map((groom, index) => {
          return (
            <Grid className='fix' item xs={3} sm={7} md={4} lg={3}>
            <GalleryCard sx={{ opacity: reveal }} key={index} elevation={5}>
              <GalleryImg loading='lazy' component='img' image={groom.image} alt={groom.customer} />
              <GalleryInfo>
                <GalleryCustomer>{groom.customer}</GalleryCustomer>
                <GalleryReview>{groom.review}</GalleryReview>
                <GalleryRating>{groom.rating}</GalleryRating>
              </GalleryInfo>
            </GalleryCard>
           <BoxPaw>
            <PiPawPrintFill className='icon'/>
          </BoxPaw>
            </Grid>
          )
        })}
      </GalleryBox>
  
    </GalleryContainer>
  )
}

export default Gallery;