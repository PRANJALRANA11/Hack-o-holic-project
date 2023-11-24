"use client"
import React from 'react'
import Image from 'next/image'
import {useState} from 'react'
import Right_sidebar from './Right_sidebar'
import { Signup_api } from '../api/api'
import Middle_component from './Middle_component'
import Modal from './Modal'
import Connect from './Connect'

export default function Left_sidebar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [response_data, setResponse] = useState("");

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.password) {
      try {
        const response = await Signup_api(formData);
        await setResponse(response.data.name);
        console.log(response.data.name);
      } catch (error) {
        // Handle the registration error
        console.error('Error during registration:', error);
      }
    }
  };    
  return (
    <>
    <div className='flex' >
    <div className='bg-[#ffffffc8]  w-[25rem] h-[100vh]' id='left_div' >
      <div className='ml-20 fixed'>
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
      <button type="button"  onClick={openDialog} class="text-white mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-52 font-medium rounded-[5rem] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post</button>
      </div>
      <div className='flex mt-10'>
        <div className='rounded-[20px] bg-black w-10 h-10'><img src='data:image/jpeg;base64,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' className='rounded-[10rem]'/></div>
        <p className='mt-1 ml-4 '>{response_data}</p>
      </div>
      </div>
    </div>
    <Modal isOpen={isDialogOpen} onRequestClose={closeDialog}></Modal>
    <Right_sidebar formData={formData} response_data={response_data} handleSubmit={handleSubmit} handleFormData={handleFormData} />
    <Middle_component></Middle_component>
    </div>
    </>
  )
}
