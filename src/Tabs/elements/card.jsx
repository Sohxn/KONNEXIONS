//member cards
import React from 'react'
import '../../css/index.css'
import member from '../img/member.png'


const card = () => {
  return (
    <div className='backdrop-blur-sm bg-white/30 h-[50vh] w-[20vw] rounded-lg'>
      <div className='py-3'>
       <img src={member} alt='...' className='rounded-full border-gray-100 shadow-sm mx-[1vw] max-h-[15vh]'/>
      </div>
      <div>
        <p className='font-roboto text-left mx-[1vw] my-[1vw]'>
        Lorem Ipsum is that it has a more-or-less normal distribution of letters,
        as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now
        </p>
      </div>
    </div>
  )
}

export default card