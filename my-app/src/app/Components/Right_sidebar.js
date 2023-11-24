import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Right_sidebar = () => {
  return (
    <>
        <div className='' style={{borderRight:"1px solid black",borderLeft:"1px solid black",width:"50rem",height:"100vh"}}>
          <div className='ml-8 mt-6'>
            <div className='flex'>
            <div >
              <img src='/tv-img.png' alt='photo'style={{borderRadius:"420px",border:"1px solid white",overflow:"hidden",width:"80px",height:"80px"}} />
            </div>
            <div>
              <p className='mt-6 ml-4 font-bold text-[1.2rem]'>pranjal</p>
            </div>
            </div>
            <div className='ml-10 mt-6 w-[40rem]'>
            <span className='font-bold text-[1.2rem]'>
              If you are new to the game, and find it difficult to bs your way through terms, just sprinkle.
                Like a good salad has cucumber, the word tradeoffs is a good addition to word salads.
                The CTO of the company will run into your room, and scream at you:✈️
            </span>
            </div>
            <div className='flex ml-10 mt-4'>
              <img src="https://img.icons8.com/fluency-systems-filled/48/facebook-like.png" alt="facebook-like" className='mr-4' style={{width:30,cursor:"pointer"}}/>
              <img src='https://img.icons8.com/metro/26/speech-bubble.png' style={{width:30,cursor:"pointer"}}/>
            </div>
          </div>
          <div style={{borderBottom:"1px solid black",marginTop:"30px"}}></div>
        </div>

    </>
  )
}

export default Right_sidebar
