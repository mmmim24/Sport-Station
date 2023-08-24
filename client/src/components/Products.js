import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from '@mui/material';
import axios from 'axios';

export const Products = () => {
  const [products,setProducts] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:3305/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <React.Fragment>
      <div className='bg-secondary sec'>
        <div className='container'>
          <div className='row row-cols-3'>
            {products.map((p)=>{
            return (
            <div className='col'>
                      <Card sx={{ width: 345 }}>
                        <CardMedia
                          component="img"
                          alt={p.pname}
                          height="300"
                          image={p.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">{p.pname}</Typography>
                          <Typography variant="body2" color="text.secondary">{p.description}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" >Add to cart</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card><br/><br/>
                    </div>)
              })}
          </div>
        </div>
      </div>  
    </React.Fragment>
  )
}
