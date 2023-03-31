import React, { useState } from 'react'

const Modal = ({ buttonText, children, classtopass }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleModalClose = () => {
    setModalOpen(false)
    document.body.style.overflow = 'unset'
  }
  console.log(children)
  return (
    <>
      <button className={classtopass} onClick={handleModalOpen}>
        {buttonText}
      </button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
