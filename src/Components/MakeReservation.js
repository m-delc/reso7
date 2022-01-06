import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MakeReservation({ time, guestname, restaurant, partysize }) {

// console.log({time, guestname, restaurant, partysize});
  return ( 

    <header>

    <div>
       {restaurant}
    </div>
    </header>

  );
}


  //   <div class="card">
  //     <img src="img_avatar.png" alt="Avatar" style="width:100%">
  //     <div class="container">
  //       <h4><b>John Doe</b></h4>
  //       <p>Architect & Engineer</p>
  //     </div>
  // </div>
     
  //   <Card sx={{ maxWidth: 345 }}>
  //     <CardMedia
  //       component="img"
  //       height="140"
  //       image=""
  //       alt="restaurant-img"
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div"></Typography>
  //         {restaurant}
  //       <Typography variant="body2" color="text.secondary">
  //         Amazing restaurant!!
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small">Make A Reservation</Button>
  //       <Button size="small">Learn More</Button>
  //     </CardActions>
  //   </Card>