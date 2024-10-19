import React from 'react';
import './VideoModal.css';

function VideoModal({ videoSrc, onClose }) {
    const isYouTube = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');

    return (
        <div className="video-modal">
            {isYouTube ? (
                <iframe
                    width="100%" 
                    height="100%"
                    src={videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <video src={videoSrc} controls autoPlay />
            )}
            <button className="close-button" onClick={onClose}>X</button>
        </div>
    );
}

export default VideoModal;
