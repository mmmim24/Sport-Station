import React from 'react'
import '../App.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BVB from '../resources/images.jpeg';
import FCB from '../resources/a2872237-4146-4a51-8955-6da11363ada6.webp';
import MCI from '../resources/man city 23 24 third kit (6).jpg';
import ACM from '../resources/ada097d0ebcf26ba.jpg';
import LFC from '../resources/13e4c2e1-d73e-446e-8af6-211d0f469404.jpg';
import CFC from '../resources/chelsea-23-24-away-kit-1.jpg';

export const Products = () => {
  return (
    <React.Fragment>
      <div className='App'>Products</div>
      <Container>
        <Row>
          <Col><img className='jrsy' src= {BVB} alt='logo'/></Col>
          <Col><img className='jrsy' src= {FCB} alt='logo'/></Col>
          <Col><img className='jrsy' src= {MCI} alt='logo'/></Col>
        </Row>
        <br></br>
        <Row>
          <Col><img className='jrsy' src= {ACM} alt='logo'/></Col>
          <Col><img className='jrsy' src= {LFC} alt='logo'/></Col>
          <Col><img className='jrsy' src= {CFC} alt='logo'/></Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
