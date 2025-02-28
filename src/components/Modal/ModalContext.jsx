import React, { createContext, useContext, useState } from 'react';
import './Modal.css';

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('no context lol');
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (content, title = '') => {
    setModalContent(content);
    setModalTitle(title);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  
  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {isOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-container">
            <div className="modal-header">
              <h2 className="modal-title">{modalTitle}</h2>
              <button className="modal-close-button" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              {modalContent}
            </div>
            <div className="modal-footer">
              <button className="modal-primary-button" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};