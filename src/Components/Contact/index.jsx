import React, { useState, useEffect } from 'react'
import { ContactUsContainer, ContactUsText, ContactUsHeading, ContactUsPhone, ContactUsEmail, ContactUsAddress, ContactForm, ContactTextField, ButtonS, LogoHome } from './ContactElement';
import { MdLocalPhone, MdEmail, MdGpsFixed } from 'react-icons/md';
import { Box, Alert, AlertTitle } from '@mui/material';
import Logo from '../../Images/TheGroomRoom2.svg';

function Contact() {  
    
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertType, setAlertType] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
      });

      const closeAlert = () => {
        setIsAlertOpen(false);
      };
    

      useEffect(() => {

        if (isError) {
          setIsAlertOpen(true); 
          setAlertType('error');
          const timer = setTimeout(() => {
            closeAlert();
          }, 1500);
    
          return () => {
            clearTimeout(timer);
          };

        } else if (isFormSubmitted) {
          setAlertType('success');
          setIsAlertOpen(true);
          const timer = setTimeout(() => {
            closeAlert();
          }, 3000);

          return () => {
            clearTimeout(timer);
          }

        }
      }, [isError, isFormSubmitted]);

    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
          const numericValue = value.replace(/\D/g, '');
          
          let formattedValue = '';
          if (numericValue.length >= 3) {
            formattedValue = numericValue.slice(0, 3);
            if (numericValue.length >= 6) {
              formattedValue += '-' + numericValue.slice(3, 6);
              if (numericValue.length > 6) {
                formattedValue += '-' + numericValue.slice(6);
              }
            } else {
              formattedValue += '-' + numericValue.slice(3);
            }
          } else {
            formattedValue = numericValue;
          }
          
          setFormData({
            ...formData,
            [name]: formattedValue,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
    
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.name) {
          errors.name = true;
        }
        if (!formData.email) {
          errors.email = true;
        }
        if (!formData.phone) {
          errors.phone = true;
        }
        if (!formData.message) {
          errors.message = true;
        }
        setFormErrors(errors);
    
        if (!errors.name && !errors.email && !errors.phone && !errors.message ) {
          setIsFormSubmitted(true);  setIsError(false);
        } else {
          setIsError(true);
        }
      };

    return (

        <ContactUsContainer disableGutters maxWidth> 


          <ContactUsText>
                 
                <ContactUsHeading><LogoHome to='/'><img src={Logo} /> </LogoHome>CONTACT US</ContactUsHeading>
                <ContactUsPhone><MdLocalPhone /> Phone: (555) 555-5555</ContactUsPhone>
                <ContactUsEmail><MdEmail /> Email: <span style={{ color: '#fd83cc' }}>TheGroomRoomLove@gmail.com</span></ContactUsEmail>
                <ContactUsAddress><MdGpsFixed /> Address: 1234 Grooming Lane, San Diego, CA 92101 <br /> <span>We Are Open From 9am - 5pm Mon - Fri</span></ContactUsAddress>  

          </ContactUsText>

                 
          <ContactForm component='form'>

          <ContactTextField id="outlined-basic" label="Your Name" variant="outlined" name='name' type='text' required  error={formErrors.name} value={formData.name} onChange={handleInputChange}/>
          <ContactTextField id="outlined-basic" label="Your Email" variant="outlined" name='email' type='email' required error={formErrors.email} value={formData.email} onChange={handleInputChange}/>
          <ContactTextField id="outlined-basic" label="Your Phone" variant="outlined" name='phone' type='tel'required  error={formErrors.phone} value={formData.phone} onChange={handleInputChange} />
          <ContactTextField className='ne' id="outlined-multiline" rows={9} multiline label="Your Message" variant="outlined" name='message' type='text' required error={formErrors.message} value={formData.message} onChange={handleInputChange}/>

        
        <Box maxWidth sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} gap={1}>
        {isAlertOpen && alertType === 'success' && (
        <Alert className='alert' severity="success" variant='filled' onClose={closeAlert}>
        <AlertTitle>Success</AlertTitle>
          Message Sent!
        </Alert>
      )}

       {isAlertOpen && alertType === 'error' && (
        <Alert className='alert' severity="error" variant='filled' onClose={closeAlert}>
          <AlertTitle>Error</AlertTitle>
          Please fill out the form.
        </Alert>
)} 

        <ButtonS type='submit' onClick={handleFormSubmit}>Submit</ButtonS>
        </Box>

        </ContactForm>

        

        </ContactUsContainer>      

        
    )
}

export default Contact;