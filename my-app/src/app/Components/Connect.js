import React from 'react'
import Dialog from 'react-modal';
import {useState} from 'react'
import {Signup_api} from '../api/api'
export default function Connect({isOpen, onRequestClose,formData,handleSubmit,handleFormData,response_data}) {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //   });

    //   const handleFormData = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     });
    //   };
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     if (formData.name && formData.email && formData.password) {
    //       try {
    //         const response = await Signup_api(formData);
    //         if (response === 200) {
    //           console.log(response.data);
    //         } else {
    //           setErrors({ email: 'This user already exists. Please try with different email address.' });
    //         }
    //       } catch (error) {
    //         // Handle the registration error
    //         console.error('Error during registration:', error);
    //       }
    //     }
    //   };    
  return (
    <div>
        <Dialog
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Dialog"
      style={{content:{width:"30rem",left:"35%",overflow:"hidden",padding:"0"}}}
    >
      <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center py-16 px-6  mx-auto md:h-screen ">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          social hive    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Connect your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} method="POST">
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                      <input  value={formData.name}
            onChange={handleFormData} type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your username" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input  value={formData.email}
            onChange={handleFormData} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input  value={formData.password}
            onChange={handleFormData} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >{response_data ? "disconnect":"connect" }</button>
              </form>
          </div>
      </div>
  </div>
</section>
</Dialog>
    </div>
  )
}
