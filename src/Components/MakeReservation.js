import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MakeReservation({ data }) {


  return (
     
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="restaurant-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {restaurant} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Amazing restaurant!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Make A Reservation</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
