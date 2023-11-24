import React from 'react'
import Dialog from 'react-modal';

export default function Modal({ isOpen, onRequestClose, children }) {
  return (
    <div>
          <Dialog
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Dialog"
    >
      <div>
        {children}
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Dialog>
      
    </div>
  )
}
