import React from 'react';
import '../css/index.css';
import teamimg from './img/team.png'; //will replace the image with a 3d loop later if UI/UX team allows
import Card from './elements/card';

const Team = () => {
  return (
    <div className='min-h-[100vh] w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700'>
      <div className='grid lg:grid-cols-2 lg:gap-[25vw]'>
        <div className='left-3 min-w-fit py-[15vh] px-[10vw]'>
            <h1 className='font-playfair text-6xl'>Meet Our Team</h1>
            <p className='font-roboto py-4 text-2xl text-gray-600'>An amazing blend of creativity and technical wizardry</p>
        </div>
        <div> 
            <img src={teamimg} alt='...' className='max-h-[60vh] my-[20vh]'/>
        </div>
      </div>
    
      <div className='grid lg:grid-cols-3 gap-[2vw] mx-[12vw]'>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
      </div>
    <div className='h-[10vh] w-full'></div>
    </div>
  )
}

export default Team