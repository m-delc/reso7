import React, { useState } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core'

const Home = () => {

        const [selectedTab, setSelectedTab] = useState(0);
      
        const handleChange = (event, newValue) => {
            setSelectedTab(newValue);
        };

    return (
        <AppBar>
            <Tabs value={selectedTab} onChange={handleChange} >
            <Tab label="About" />
            <Tab label="Make A Reservation" />
            <Tab label="Item Three" />
            </Tabs>
        </AppBar>
        
    )
}

export default Home