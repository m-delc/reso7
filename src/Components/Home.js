import React, { useState } from 'react'
import { Tabs, Tab, AppBar } from "@material-ui/core";
import MakeReservation from './MakeReservation'
import About from './About'


const Home = () => {

    const [selectedTab, setSelectedTab] = useState(2)

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue)
    }

    console.log(selectedTab)

    return (
        <>
        <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleTabChange} >
            <Tab label="Home" />
            <Tab label="Make A Reservation" />
            <Tab label="About Us" />
          </Tabs>
        </AppBar>
        {selectedTab === 1 && <MakeReservation />}
        {selectedTab === 2 && <About />} 
      </>
    )
}

export default Home
