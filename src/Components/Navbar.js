import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import Datamap from './Datamap'
import MakeReservation from './MakeReservation';

const Navbar = ({ data }) => {

    const buttons = [
        <Button key="Home"
                component={Link} to='./'>Home</Button>,
        <Button key="Make A Reservation"
                component={Link} to="./makereservation">Make A Reservation</Button>,
        <Button key="About"
                component={Link} to="./about">About</Button>,
      ];

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                    m: 1,
                    },}}>
                <ButtonGroup size="large" aria-label="large button group">
                    {buttons}
                </ButtonGroup>
            </Box>
            <MakeReservation />
            <Datamap />
            {/* <Datamap data={data} /> */}
            {/* {data.map(d => (
                <MakeReservation key={d.id}
                                    restaurant={d.restaurant}
                                    name={d.name}
                                    partysize={d.partysize}
                                    time={d.time}
                                    date={d.date} />

            ))} */}
        </>
    )
    
}

export default Navbar
