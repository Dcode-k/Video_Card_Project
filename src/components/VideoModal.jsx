import React from 'react';
import './VideoModal.css';

function VideoModal({ videoSrc, onClose }) {
    return (
        <div className="video-modal">
            <video src={videoSrc} controls autoPlay />
            <button className="close-button" onClick={onClose}>X</button>
        </div>
    );
}

export default VideoModal;
