import React from 'react';
import './VideoCard.css';

function VideoCard({ image, videoSrc, onClick, onMouseEnter, highlightedIndex, index }) {
    const isHighlighted = highlightedIndex === index;

    // Calculate scale based on position relative to the highlighted index
    const baseScale = isHighlighted ? 1.2 : 1 - Math.abs(highlightedIndex - index) * 0.05; // Adjust the scaling factor for left/right cards
    
    // Calculate zIndex based on position relative to highlightedIndex
    const zIndex = isHighlighted ? 5 : Math.max(1, 5 - Math.abs(highlightedIndex - index));

    return (
        <div
            className="video-card"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            style={{
                transform: `scale(${baseScale})`,
                zIndex: zIndex, // Set zIndex based on calculated value
                filter: isHighlighted ? 'none' : 'brightness(0.7)', // Darken non-highlighted cards
            }}
        >
            <img 
                src={image} // Show image instead of video
                alt="Video thumbnail" 
                style={{ width: '100%', height: '100%' }}
            />
            {isHighlighted && <div className="play-button">▶</div>}
        </div>
    );
}

export default VideoCard;
