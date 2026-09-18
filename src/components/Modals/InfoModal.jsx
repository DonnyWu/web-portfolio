import React from 'react';
import '../../Modal.css';

const InfoModal = ({ open, onClose, image, title, caption, square, frameBg, children }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        {/* Experince logo */}
        <div className="polaroidWrap">
          {image ? (
            <img
              className={square ? 'companyImg square' : 'companyImg'}
              style={frameBg ? { background: frameBg } : undefined}
              src={image}
              alt='/'
            />
          ) : (
            <div className='polaroidPlaceholder'>Coming Soon</div>
          )}
          <div className="polaroidCaption">{caption}</div>
        </div>
        <div className='modalRight'>
          <h1 className='title'>{title}</h1>
          {/* Content Details */}
          <div className='content contentFont'>{children}</div>
          <div className='btnContainer'>
            <button className='btnOutline' onClick={onClose}>
              <span className='bold'>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
