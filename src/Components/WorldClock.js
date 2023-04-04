import React from 'react'
//import AddIcon from "@mui/icons-material/Add";
//import CreateIcon from '@mui/icons-material/Create';

function WorldClock() {
  return (
    <div className="bg-orange-300">
      <div className="flex justify-between">
        <div style={{ height: 600 }}>
          <div className='bg-orange-500 flex'>
            <p className='text-xl'>
              10:30 <span className='text-xs'>AM</span>
            </p>
            <p>Washington, DC, USA</p>
            <p>2/12/2023, -8 hrs & 30 mins</p>
          </div>
          <div className='bg-orange-500 flex'>
            <p className='text-xl'>
              7:20 <span className='text-xs'>PM</span>
            </p>
            <p>Local Time</p>
            <p>2/12/2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorldClock