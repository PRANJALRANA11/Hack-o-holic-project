import React from 'react'
import Image from 'next/image'
import Right_sidebar from './Right_sidebar'
import Middle_component from './Middle_component'

export default function Left_sidebar() {
  return (
    <>
    <div className='flex'>
    <div className='bg-[#ffffffc8]  w-[25rem] h-[100vh]' >
      <div className='ml-28 'style={{}}>
      <img src='/global.png' className='ml-8 mt-8'/>
      <div className='flex mt-20 hover:bg-[#c5c5bb]  ' style={{borderRadius:"18px",height:"40px",padding:"3px",cursor:"pointer",width:"15rem"}}>
        <img src='https://img.icons8.com/ios-glyphs/30/home.png' style={{width:"35px",marginLeft:"30px"}}/>
        <p className='text-black mt-1 ml-4 font-sans text-[19px] font-bold '> Home</p>
      </div>
      <div className='flex mt-9  hover:bg-[#c5c5bb] ' style={{borderRadius:"18px",height:"40px",padding:"3px",cursor:"pointer",width:"15rem"}}>
        <img src='https://img.icons8.com/ios-filled/50/000000/search--v1.png' style={{width:"30px",marginLeft:"30px"}}/>
        <p className='text-black mt-1 ml-4 font-sans text-[19px] font-bold'> Explore</p>
      </div>
      <div className='flex mt-9 hover:bg-[#c5c5bb]'style={{borderRadius:"18px",height:"40px",padding:"3px",cursor:"pointer",width:"15rem"}}>
        <img src='https://img.icons8.com/ios-filled/50/000000/bell.png' style={{width:"35px",marginLeft:"30px"}}/>
        <p className='text-black mt-1 ml-4 font-sans text-[19px] hover:bg-[#c5c5bb] font-bold'>Notifications</p>
      </div>
      <div className='flex mt-9 hover:bg-[#c5c5bb]'style={{borderRadius:"18px",height:"40px",padding:"3px",cursor:"pointer",width:"15rem"}}>
        <img src='https://img.icons8.com/ios-filled/50/chat-message--v1.png' style={{width:"35px",marginLeft:"30px"}}/>
        <p className='text-black mt-1 ml-4 font-sans text-[19px] hover:bg-[#c5c5bb] font-bold'>Messages</p>
      </div>
      <div className='flex mt-9 hover:bg-[#c5c5bb] 'style={{borderRadius:"18px",height:"40px",padding:"3px",cursor:"pointer",width:"15rem"}}>
        <img src='https://img.icons8.com/ios-glyphs/30/000000/person-male.png'style={{width:"35px",marginLeft:"30px"}}/>
        <p className='text-black mt-1 ml-4 font-sans text-[19px] hover:bg-[#c5c5bb] font-bold'>profile</p>
      </div>
      <div className='flex'>
      <button type="button" class="text-white mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-52 font-medium rounded-[5rem] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post</button>
      </div>
      <div className='flex mt-24'>
        <div className='rounded-[20px] bg-black w-10 h-10'>aaa</div>
        <p className='mt-1 ml-4 '>person3</p>
      </div>
      </div>
    </div>
    <Right_sidebar/>
    <Middle_component></Middle_component>
    </div>
    </>
  )
}
