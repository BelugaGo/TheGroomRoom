import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesCard, CardImg, CardInfo, CardTitle, CardDescription, CardButtton, Video, ServicesGrid, ServicesHeader, ShareSpan, SocialGroup, SocialButton, ButtonS, ServiceIntro } from './ServicesElement'
import PetGroomBg from '../../Images/PetGroomBg3.mp4';
import Bath from '../../Images/Bath.jpg';
import HairCut from '../../Images/Haircuts.jpg';
import NailTrim from '../../Images/Nail Trims.jpg';
import TeethCleaning from '../../Images/TeethCleaning.jpg';
import MassageTherapy from '../../Images/MassageTherapy.jpg';
import SpaPackage from '../../Images/SpaPackage.jpg';
import PetPhotography from '../../Images/PetPhotography.jpg';
import CustomGroomingStyles from '../../Images/CustomGroomingStyles.jpg';
import { CiInstagram, CiFacebook, CiTwitter } from 'react-icons/ci';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';


function Services() {

const petServices = [
     
    { image: `${Bath}`,
      title: 'Baths',
      description: `Bathing is an essential grooming service that helps keep pets clean and hygienic. It involves using pet-friendly shampoos and conditioners to wash away dirt, grime, and odors from the pet's fur. Bathing also helps in maintaining healthy skin and a shiny coat. Additionally, specialized shampoos may be used for pets with skin conditions or specific needs.`,

    },

    { image: `${HairCut}`,
      title: 'Haircuts',
      description: `Haircuts or grooming services involve trimming and styling a pet's fur according to the owner's preferences or breed-specific standards. This service is essential for long-haired breeds to prevent matting and ensure comfort, especially in warmer weather. Groomers use clippers, scissors, and other tools to achieve the desired look while maintaining the pet's comfort and safety.`,

    },

    { image: `${NailTrim}`,
      title: 'Nail Trims',
      description: `Nail trims are essential for keeping a pet's claws at an appropriate length. Overgrown nails can lead to discomfort, difficulty walking, and even injury. Groomers carefully trim the nails to prevent them from becoming too long, avoiding the quick (the sensitive inner part of the nail). This service ensures that pets can move around comfortably and safely.`,

    },

    { image: `${TeethCleaning}`,
      title: 'Teeth Cleaning',
      description: `Our professional teeth cleaning service goes beyond the aesthetics of a bright smile. It's an essential part of your pet's overall health and well-being. Our experienced groomers will gently and effectively clean your pet's teeth, helping to prevent dental issues and ensuring your furry friend's mouth feels fresh and healthy.`

    },

    { image: `${MassageTherapy}`,
      title: 'Massage Therapy',
      description: `Treat your pet to the ultimate relaxation with our soothing massage therapy service. Our certified pet massage therapists will work their magic to relieve tension, improve circulation, and promote relaxation in your beloved companion. Whether your pet needs some extra pampering or has specific muscle concerns, our massage therapy can provide comfort and relief.`,

    },

    { image: `${SpaPackage}`,
      title: 'Spa Package',
      description: `Indulge your pet with our luxurious spa package. It's a day of pure pampering and relaxation, including a soothing bath, a gentle massage, and a customized grooming session. Your pet will leave feeling rejuvenated and looking their best, ready to strut their stuff with confidence.`,

    },

    { image: `${PetPhotography}`,
      title: 'Pet Photography',
      description: `Capture the essence of your pet's beauty and personality with our professional pet photography service. Our skilled photographers have a knack for connecting with animals and capturing their best angles. Whether you want cherished memories or stunning portraits, we'll create timeless photographs that you'll treasure forever.`,

    },

    { image: `${CustomGroomingStyles}`,
      title: 'Custom Grooming Styles',
      description: `At The Groom Room, we understand that each pet is unique. That's why we offer custom grooming styles tailored to your pet's individual preferences and needs. Whether your pet requires a breed-specific cut, a creative and trendy style, or a special look for a special occasion, our expert groomers will work with you to create a personalized grooming plan that leaves your pet looking and feeling fabulous.`,

    }, 

];

const speedDialSocial = [
    { icon: <CiInstagram />, name: 'Instagram' },
    { icon: <CiFacebook />, name: 'Facebook' },
    { icon: <CiTwitter />, name: 'Twitter' },
    { icon: <BiLogoPinterestAlt />, name: 'Pinterest' },
];

  return (
   <ServicesContainer maxWidth disableGutters id='services'>
    <Video src={PetGroomBg} loop autoPlay muted loading='lazy' />
    <ServicesHeader>Our Services</ServicesHeader>
    <ServiceIntro>Welcome to our pet grooming services! At The Groom Room, we understand that your furry friends deserve the best care. Our dedicated team of experienced groomers is here to pamper and groom your pets with love and expertise. From a refreshing bath to stylish trims, we offer a range of services to keep your pets looking and feeling their best. Discover our offerings and treat your pets to a spa-like experience they'll adore!</ServiceIntro>

    {/* Larger Screens */}
     <ServicesWrapper container columns={{xs: 3, sm: 7, md: 9, lg: 13 }} spacing={{ xs: 2, md: 3, lg: 5 }}>
     {petServices.map((services, index) => (
            <ServicesGrid item  xs={3} sm={3} md={4} lg={4} >
            <ServicesCard key={index} elevation={5} className={index >= 4 ? 'special': ''}>
            <CardImg component='img' src={services.image} loading='lazy'/>
            <CardInfo>
            <CardTitle>{services.title}</CardTitle>
            <CardDescription>{services.description}</CardDescription>
            </CardInfo>
           <CardButtton>
           <Link to='/book'><ButtonS className={index >= 4 ? 'specialButton' : ''} sx={{}}>Book Now!</ButtonS></Link>
           <SocialGroup className="share"> {speedDialSocial.map((social, index) => (
             <SocialButton key={index} variant='text'> 
              {social.icon}
              </SocialButton>
            ))}
            <ShareSpan className={index >= 4 ? 'specialShare' : ''}>Share</ShareSpan>
            </SocialGroup>
            </CardButtton>
           </ServicesCard>
           </ServicesGrid>
         ))}
     </ServicesWrapper>  
    
     {/* Smaller Screens */}
     <Swiper
        effect={'cube'}
        observer={true}
        observeParents={true}
        navigation={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Navigation]}
        //className="mySwiper"
      >
         {petServices.map((services, index) => (
          <SwiperSlide>
          <ServicesCard key={index} className={index >= 4 ? 'special': ''}elevation={5}>
            <CardImg component='img' src={services.image} loading='lazy'/>
            <CardInfo>
            <CardTitle>{services.title}</CardTitle>
            <CardDescription>{services.description}</CardDescription>
            </CardInfo>
           <CardButtton>
           <Link to='/book'><ButtonS className={index >= 4 ? 'specialButton' : ''}>Book Now!</ButtonS></Link>
           <SocialGroup className="share"> {speedDialSocial.map((social, index) => (
             <SocialButton key={index} variant='text'> 
              {social.icon}
              </SocialButton>
            ))}
            <ShareSpan className={index >= 4 ? 'specialShare' : ''}>Share</ShareSpan>
            </SocialGroup>
            </CardButtton>
           </ServicesCard>
         </SwiperSlide>
          ))}
         </Swiper>

   </ServicesContainer>
  )
}

export default Services;