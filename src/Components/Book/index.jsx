import React, { useState, useEffect } from 'react';
import { BookContainer, HomeButton, BookTitle, BoxForm, FormTextField, BoxDateTime, SelectService, SubmitButton, TimePickerF, DatePickerF, BoxTitle } from './BookElement';
import { InputLabel, OutlinedInput, MenuItem, Checkbox, ListItemText, FormControl, Box, ThemeProvider, createTheme, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Logo from '../../Images/TheGroomRoom2.svg';
import { Alert, AlertTitle } from '@mui/material';



function Book() {


  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [serviceName, setServiceName] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState(null);

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

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


  const [formData, setFormData] = useState({
      fName: '',
      lName: '',
      email: '',
      phone: '',
      date: null,
      time: '',
      services: ''
    });
    const [formErrors, setFormErrors] = useState({
      fName: false,
      lName: false,
      email: false,
      phone: false,
      date: false,
      time: false
    });
  
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

      if (!formData.fName) {
        errors.fName = true;
      }
      if (!formData.lName) {
        errors.lName = true;
      }
      if (!formData.email) {
        errors.email = true;
      }
      if (!formData.phone) {
        errors.phone = true;
      }
      if(!formData.date) {
        errors.date = true;
      }
      setFormErrors(errors);
  
      if (!errors.fName && !errors.lName && !errors.email && !errors.phone && !errors.date) {
        setIsFormSubmitted(true);  setIsError(false);
      } else {
        setIsError(true);
      }
    };

const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setServiceName(
    typeof value === 'string' ? value.split(',') : value,
  );
};

const services = [
    'Bath',
    'Haircut',
    'Nail Trim',
    'Teeth Cleaning',
    'Massage Therapy',
    'Spa Package',
    'Pet Photography',
    'Custom Grooming Styles',
]

const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6;
  };

const tomorrow = dayjs().add(1, 'day');

  const isTimeDisabled = (time) => {
    const hours = time.hour();
    return hours >= 17 || hours < 9;
  };

  const theme = createTheme();

  theme.typography.h6 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };

  theme.typography.h3 = {
    fontSize: '1.3rem',
    '@media (min-width:600px)': {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.9rem',
    },
  };

  return (

   <BookContainer disableGutters maxWidth>


       <BoxForm spacing={0} p={0} gap={1} boxShadow={5}>

        <ThemeProvider theme={theme}>
          <BoxTitle>
          <HomeButton to='/'><img src={Logo} /></HomeButton>
       <BookTitle variant='h3'>Book an Appointment<Typography sx={{  fontWeight: '400'}} variant='h6'>please fill out the form</Typography></BookTitle>
       </BoxTitle>
         </ThemeProvider>
         <br />

         
        
        <FormTextField label='First Name' required type='text' name='fName' error={formErrors.fName} value={formData.fName} onChange={handleInputChange} />
        <FormTextField label='Last Name'  required type='text' name='lName' error={formErrors.lName} value={formData.lName} onChange={handleInputChange} />
        <FormTextField className='resize' label='Email' required type='email' name='email' error={formErrors.email} value={formData.email} onChange={handleInputChange}/>
        <FormTextField className='resize' label='Phone' required type='tel' name='phone' error={formErrors.phone} value={formData.phone} onChange={handleInputChange} />

        <BoxDateTime>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerF shouldDisableDate={isWeekend} label='Date' minDate={tomorrow} disablePast value={formData.date} onChange={(date) => {setFormData({ ...formData, date, })}} slotProps={{ textField: { required: true  } }} />
        </LocalizationProvider>
        
       
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box components={['TimePicker']}>
        <TimePickerF label="Time" shouldDisableTime={isTimeDisabled} closeOnSelect={false} slotProps={{ textField: {required: true  } }} />
        </Box>
        </LocalizationProvider>

        </BoxDateTime>

        <FormControl sx={{ display: 'flex', justifyContent: 'center' }}>
        <InputLabel required id="demo-multiple-checkbox-label">Services</InputLabel>
        <SelectService
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          className='resize'
          multiple
          type='checkbox'
          value={serviceName}
          onChange={handleChange}
          label='services'
          name='services'
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        input={<OutlinedInput id="select-multiple-chip" label="Services" />}
        >
          {services.map((service) => (
            <MenuItem key={service} value={service}>
              <Checkbox checked={serviceName.indexOf(service) > -1} />
              <ListItemText primary={service} />
            </MenuItem>
          ))}
        </SelectService>
        </FormControl>

        

        <FormTextField className='message' multiline label='Comments/Notes' rows={7} type='text'/>
        <SubmitButton type='submit' onClick={handleFormSubmit}>Submit</SubmitButton>

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
       </BoxForm>


    
      

   </BookContainer>
  )
}

export default Book;