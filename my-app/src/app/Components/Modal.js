import React, { useState } from 'react';
import Dialog from 'react-modal';
import { post_api } from '../api/api';

export default function Modal({ isOpen, onRequestClose,response_data }) {
  const [postText, setPostText] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handlePhotoChange = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handlePostSubmit = async () => {
    try {
      // Create FormData
      const formData = new FormData();
      formData.append('postText', postText);
      formData.append('name', "pranjal");
       // Replace with actual user name or relevant value
      formData.append('photo', photoFile);
      formData.append('video', videoFile);

      // Make API call
      const response = await post_api(formData);
      console.log(response);
    } catch (error) {
      // Handle the error
      console.error('Error during post submission:', error);
    }

    // Reset form fields
    setPostText('');
    setPhotoFile(null);
    setVideoFile(null);

    // Close the modal
    onRequestClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Post"
      style={{
        content: {
          width: '0rem',
          left: '35%',
          overflow: 'hidden',
          padding: '0',
          height: '0',
        },
      }}
    >
      <div>
        <div className="overflow-y-auto ml-[30rem] mt-[10rem] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create Post</h3>
                <button
                  onClick={onRequestClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal"
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="What's happening?"
                  name="postText"
                  required
                />

                <div>
                  <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/000000/image.png"
                      alt="Upload Photo"
                      style={{ cursor: 'pointer', width: '30px', marginRight: '1rem', marginLeft: '1rem' }}
                    />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    id="photo"
                    className="hidden"
                  />
                </div>

                <div>
                  <label htmlFor="video" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/video-clip.png"
                      alt="Upload Video"
                      style={{ cursor: 'pointer', marginRight: '1rem', width: '30px' }}
                    />
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoChange}
                    id="video"
                    className="hidden"
                  />
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={handlePostSubmit}
                  className="text-white w-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
