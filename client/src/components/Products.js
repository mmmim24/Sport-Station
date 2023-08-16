import React from 'react'
import '../App.css';
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from '@mui/material';
import {Container,Row,Col}  from 'react-bootstrap';
import BVB from '../resources/BVB.jpeg';
import FCB from '../resources/FCB.webp';
import MCI from '../resources/MCI.jpg';
import ACM from '../resources/ACM.jpg';
import LFC from '../resources/LFC.jpg';
import CFC from '../resources/CFC.jpg';

export const Products = () => {
  return (
    <React.Fragment>
      <div><br></br></div>
      <Container>
        <Row>
          <Col><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Liverpool Away kit 23/24"
        height="300"
        image={LFC}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Liverpool Away Kit 23/24
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Grab this beautiful gradient green kit from nike! You will never walk alone.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Col>
          <Col><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Dortmund Home kit 2023/24"
        height="300"
        image={BVB}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dortmund Home kit 2023/24
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Puma is again back with their scintilating design with yellow and black! Grab Yours.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Col>
          <Col><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="AC Milan Home kit 23/24"
        height="300"
        image={ACM}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        AC Milan Home kit 23/24
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Another classy design by puma for the red side of the Milan.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Col>
        </Row>
        <br></br>
        <Row>
          <Col><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={FCB}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          FC Barcelona Away kit 23/24
        </Typography>
        <Typography variant="body2" color="text.secondary">
          NIKE is trying some minimalistic design on white for Barcelona and everybody is loving it!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Col>
          <Col><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Chelsea Home Kit 2023/24"
        height="300"
        image={CFC}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chelsea Home Kit 2023/24
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Chelsea have no shirt sponsors this season and so this kit from nike looks dope.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Col>
          <Col><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Man City Third Kit 2023/24"
        height="300"
        image={MCI}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Man City Third Kit 2023/24
        </Typography>
        <Typography variant="body2" color="text.secondary">
          PUMA again strikes with this electrifying third kit for the blue side of Manchester.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Col>
        </Row>
      <div><br></br></div>
      </Container>
    </React.Fragment>
  )
}
