import Button  from '@mui/material/Button';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import  'bootstrap';
import NF from '../resources/404-page-not-found-illustration-2048x1462-azn7c8sp.png';

export const Error = () => {
  return (
    <React.Fragment>
      <Container>
      <div className='error'>
      <img className='w-50' src={NF} alt='404-page-not-found-illustration-2048x1462-azn7c8sp.png'></img>
      <div className='text-div text-danger'>Ooops! The page you are looking for does not exist!  <SentimentVeryDissatisfiedIcon/></div>
      <Button className='btn' color='primary' variant='contained'>
        <Link to='/' className='lnk'>
          Back to Home
        </Link>
        </Button>
        </div>
      </Container>
    </React.Fragment>
  )
}
