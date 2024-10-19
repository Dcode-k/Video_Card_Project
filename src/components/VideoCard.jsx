import React from 'react';
import './VideoCard.css';

function VideoCard({ videoSrc, onClick, scale, onMouseEnter, isHighlighted }) {
    return (
        <div
            className="video-card"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            style={{
                transform: `scale(${isHighlighted ? 1.1 : 0.95})`, // Limit scaling difference
                zIndex: isHighlighted ? 2 : 1, // Highlighted card appears on top
            }}
        >
            <video src={videoSrc} muted loop />
            {isHighlighted && <div className="play-button">▶</div>}
        </div>
    );
}

export default VideoCard;
