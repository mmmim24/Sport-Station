import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from '@mui/material';
import {Container,Row,Col}  from 'react-bootstrap';
import BVB from '../resources/BVB.jpeg';
import FCB from '../resources/FCB.webp';
import MCI from '../resources/MCI.jpg';
import ACM from '../resources/ACM.jpg';
import LFC from '../resources/LFC.jpg';
import CFC from '../resources/CFC.jpg';
import axios from 'axios';

export const Products = () => {
  var cont = 0;
  const [products,setProducts] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:3305/getproducts')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <React.Fragment>
      

      
      
       <div className='bg-secondary sec'>
      <Container>
        <Row>
        {products.map((p)=>{
        {cont=cont+1}
        return <Col><Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          alt={p.pname}
          height="300"
          image={p.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {p.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" >Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></Col>
      })}
        </Row>
      <div><br></br></div>
      </Container>
      </div> 
    </React.Fragment>
  )
}
