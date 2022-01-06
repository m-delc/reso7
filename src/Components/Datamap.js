import React, {useEffect, useState } from 'react'
import MakeReservation from './MakeReservation'

const Datamap = () => {

    const [data, setData] = useState([])
    const getData = async () => {
      const r = await fetch('http://localhost:3000/resos')
      const s = await r.json()
      setData(s)
    }
    useEffect(() => {
      getData()
    }, [])



    console.log(data);



    return ( 
        <>
            {data.map(d => (
                 <MakeReservation key={d.id}
                                    time={d.time}
                                    guestname={d.guestname}
                                    restaurant={d.restaurant}
                                    partysize={d.partysize} />

            ))}
        </>
    )
}

export default Datamap
