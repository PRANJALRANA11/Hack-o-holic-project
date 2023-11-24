import React from 'react';
import axios from 'axios';

export  async function Signup_api(formData) {
    try {
      const response = await axios.post("http://localhost:8000/connect", formData);
      if (response.status === 200) {
        // console.log('User has been successfully registered');
        return response;
      } 
      else{
        // console.log('User has not been successfully registered');
        return response;
      } 
    } catch (error) {
      console.error('Error during registration');
    }
  }
export  async function users_api(formData) {
    try {
      const response = await axios.get("http://localhost:8000/get_users", formData);
      if (response.status === 200) {
        // console.log('User has been successfully registered');
        return response;
      } 
      else{
        // console.log('User has not been successfully registered');
        return response;
      } 
    } catch (error) {
      console.error('Error during registration');
    }
  }
export  async function post_api(formData) {
    try {
      const response = await axios.post("http://localhost:8000/post", formData);
      if (response.status === 200) {
        // console.log('User has been successfully registered');
        return response;
      } 
      else{
        // console.log('User has not been successfully registered');
        return response;
      } 
    } catch (error) {
      console.error('Error during registration');
    }
  }
  
export  async function get_api() {
    try {
      const response = await axios.get("http://localhost:8000/get_details");
      if (response.status === 200) {
        // console.log('User has been successfully registered');
        return response;
      } 
      else{
        // console.log('User has not been successfully registered');
        return response;
      } 
    } catch (error) {
      console.error('Error during registration');
    }
  }
  