import React from 'react'

export default function Middle_component() {
  return (
    <div>
      <div className='mt-4 ml-6 mr-4'>
        
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[20rem] w-[25rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  " style={{outline:"none"}}  placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

      </div>
      <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" style={{borderRadius:"4rem",paddingTop:"2rem",height:"30rem",marginTop:"3rem",width:"27rem"}}>
        <h1 style={{fontSize:"2rem",fontWeight:"bold",marginLeft:"1rem",marginTop:"1rem"}}>Who To Follow</h1>
        <div className='flex mt-6'>
            <img src='/tv-img.png' style={{borderRadius:"420px",border:"1px solid white",overflow:"hidden",width:"80px",height:"80px",marginLeft:"1rem"}}></img>
            <p  style={{marginTop:"1.5rem",marginLeft:"1rem",fontWeight:"bold",fontSize:"1.5rem"}}>Virat</p>
            <button type="button" class="text-white bg-blue-500   font-medium  text-sm   focus:outline-none " style={{width:"12rem",borderRadius:"20rem",height:"3rem",marginTop:"1rem",marginLeft:"3rem"}}>Follow</button>
        </div>
        
      </div>
    </div>
  )
}
