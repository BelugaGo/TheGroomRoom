import React, { useLayoutEffect, useRef, useState } from 'react';
import { AboutContainer, AboutWrapper, AboutTitle, AboutStory, Team, TeamTitle, TeamPic, TeamAbout, TeamBox } from './AboutElement.jsx';
import Sarah from '../../Images/Sarah.svg';
import Randy  from '../../Images/Randy.svg';
import Jessica  from '../../Images/Jessica.svg';
import Monica  from '../../Images/Monica.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const StoryLeft = useRef();
  const TeamRight = useRef();
  const [memberActive, isMemberActive] = useState(0);


  const teamMembers = [

    { image: `${Sarah}`,
      name: 'Sarah: Business Owner',
      about: `Meet Sarah, the driving force behind our pet grooming salon. Since she was a child, Sarah's heart has always been captivated by the charm of animals, particularly dogs and cats. Her dreams were filled with wagging tails and purring companions, and she knew from an early age that her life's purpose was intertwined with them.

      After years of working in various jobs, Sarah decided to follow her passion and create a pet grooming business that truly cares. She named it "The Groom Room" to reflect the inviting and nurturing environment she envisioned for her furry clients.
      
      With unwavering determination, Sarah invested in professional grooming courses and apprenticed with seasoned groomers to gain expertise. Her relentless pursuit of knowledge led her to become a certified groomer, and she was ready to bring her dream to life.
      
      The Groom Room found its first home in a quaint cottage on the outskirts of town. Word quickly spread about the personalized care and commitment to pet well-being that Sarah and her team offered. Sarah's warm-hearted approach not only transformed pets on the outside but also created a serene and joyous atmosphere for them.`,
    },

    { image: `${Randy}`,
      name: 'Randy: Team Member',
      about: `Randy, one of our cherished team members, radiates energy and a genuine love for animals. His connection with pets is almost magical; he can calm the most anxious of dogs and make them feel right at home in our salon.

      Growing up surrounded by pets, Randy always knew he wanted a career where he could make a difference in their lives. Joining The Groom Room was a natural choice for him, as it allowed him to channel his passion and enthusiasm into pampering and caring for pets every day.
      
      When Randy is not grooming, he's often seen engaging in playtime with our four-legged guests, making their experience not just about grooming but about having a blast. His playful spirit brightens up our salon and brings endless smiles to both pets and their owners.`,
    },

    { image: `${Monica}`,
      name: 'Monica: Team Member',
      about: `Monica adds an artistic touch to our team with her creative grooming ideas. Her background in graphic design and love for pets converge to create themed grooming packages that leave pets looking uniquely adorable.

      As a passionate advocate for animal welfare, Monica understands that grooming isn't just about aesthetics; it's also about making pets feel special. She's the mastermind behind our holiday-themed grooming sessions, making sure pets leave with festive flair.
      
      Beyond her creative prowess, Monica's dedication to perfection ensures that every pet receives meticulous care. She treats each grooming session as an opportunity to showcase her artistic talents while pampering pets to perfection.
      
      These extended stories capture the essence of each team member's journey and their special contributions to The Groom Room.`,
    },

    { image: `${Jessica}`,
      name: 'Jessica: Team Member',
      about: `Jessica possesses a unique skill set that makes her a perfect fit for our team. With a background in animal behavior, she understands the psychology of pets, which enables her to provide them with an exceptionally soothing and comfortable grooming experience.

      Her journey into the world of pet grooming was driven by her desire to help pets overcome anxiety and fear during grooming sessions. Jessica's gentle approach and keen observation skills allow her to tailor her techniques to the specific needs of each pet, ensuring they feel safe and loved.
      
      In addition to her grooming expertise, Jessica is known for her feline finesse. Cats, notorious for their sensitivity, find solace in Jessica's calming presence. She's a true whisperer, and her ability to turn even the most nervous kitties into purring bundles of joy is nothing short of remarkable.`,
    },
  ]

  useLayoutEffect(() => {
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  tl.from(StoryLeft.current, {
    x: -500,
    opacity: 0,
    duration: 2,
    ease: 'power4.inOut(1, 0.5)',
  });

  tl2.from(TeamRight.current, {
    x: 500,
    opacity: 0,
    duration: 2,
    ease: 'power4.inOut(1, 0.5)',
  });

  const storyLeftTrigger = ScrollTrigger.create({
    trigger: StoryLeft.current,
    animation: tl,
    start: '-200px center',
    end: '500px 80%',
    toggleActions: 'play none none none',
  });

  const teamRightTrigger = ScrollTrigger.create({
    trigger: TeamRight.current,
    animation: tl2,
    start: '-270px center',
    end: 'bottom bottom',
    toggleActions: 'play none none none',
  });

  
  return () => {
    storyLeftTrigger.revert(); 
    teamRightTrigger.revert();
  }; 
}, []);


  return (
   <AboutContainer maxWidth disableGutters id='about'>
        <AboutWrapper ref={StoryLeft}>
        <AboutTitle>
        The Groom Room: A Tale of Fur-tastic Grooming Adventures
        </AboutTitle>
        <br />
        <AboutStory>
        Once upon a time in a cozy town, nestled amidst rolling hills and green pastures, there lived a passionate pet lover named Sarah. Sarah had always dreamed of working with animals, and her love for pets, especially dogs and cats, knew no bounds.<br /><br />

    One sunny afternoon, while volunteering at the local animal shelter, an idea struck her like a bolt of lightning. She noticed that many shelter animals, despite their charm, were overlooked because of their unkempt appearances. Sarah realized she could make a difference in their lives by offering them a spa-like experience that would not only help them look their best but also boost their chances of finding forever homes.<br /><br />
    
    With unwavering determination and a heart full of love for animals, Sarah embarked on a journey to start her very own pet grooming business. She named it "The Groom Room" to capture the essence of fun and cleanliness that her pet clients would enjoy.<br /><br />
    
    To get started, Sarah enrolled in professional grooming courses and apprenticed with experienced groomers to learn the ropes. She worked tirelessly, honing her skills and gaining a deep understanding of different breeds and their grooming requirements.<br /><br />
    
    The Groom Room opened its doors in a charming little cottage on the outskirts of town. The business quickly gained a reputation for its personalized care and commitment to pet well-being. Sarah and her team focused not only on grooming but also on creating a stress-free and enjoyable experience for every pet that walked through their doors.<br /><br />
    
    Word spread like wildfire about The Groom Room. Pet owners marveled at how their furry companions returned home not just looking groomed but with tails wagging, purring contentedly, or playfully bouncing around. They appreciated the extra touches like organic shampoos, soothing massages, and adorable bandanas that made their pets feel truly special.<br /><br />
    
    As the years went by, The Groom Room flourished. Sarah expanded her team of skilled groomers and introduced additional services like pet photography sessions, pet parties, and themed grooming packages. The business also gave back to the community by offering free grooming to shelter animals in need.<br /><br />
    
    The Groom Room became more than just a pet grooming salon; it was a haven for pets and their owners alike. It was a place where tails never stopped wagging, where meows turned into purrs of contentment, and where the bond between pets and their humans grew stronger with each visit.<br /><br />
    
    Sarah's dream of making a difference in the lives of pets had come true, and her story served as an inspiration to others who shared her passion. The Groom Room continued to thrive, reminding everyone that with a lot of love, a little grooming, and a sprinkle of magic, every pet could lead a fur-tastically happy life.
        </AboutStory>
        </AboutWrapper>
        <Team boxShadow={5} ref={TeamRight}>
        <TeamTitle>The Groom Team</TeamTitle>
        <Swiper
         speed={1000}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         spaceBetween={10}
         navigation={true}
         slidesPerView={2}
         modules={[Navigation]}
         onRealIndexChange={(swiper) => {
           isMemberActive(swiper.realIndex);
         }}>

          {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
        <TeamPic component='img' src={member.image} loading='lazy' />
       </SwiperSlide>
          ))}
       </Swiper>
       <TeamBox>
       {teamMembers.map((member, index) => (
       <TeamAbout key={index}>
        { memberActive === index && (
        <>
        <strong style={{ fontSize: '25px', lineHeight: '3rem', whiteSpace: 'nowrap', fontFamily: 'Big Shoulders Text, cursive', color: '#fd83cc'}}>{member.name}</strong> 
        <p>{member.about}</p>
        </>
         )}
       </TeamAbout>
        ))}
      </TeamBox>
      </Team>
   </AboutContainer>
  )
}

export default About;