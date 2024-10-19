import React from 'react';
import './VideoCard.css';

function VideoCard({ image, videoSrc, onClick, onMouseEnter, highlightedIndex, index }) {
    // Calculate scale based on position relative to the highlighted index
    const isHighlighted = highlightedIndex === index;
    const baseScale = isHighlighted ? 1.2 : 1 - Math.abs(highlightedIndex - index) * 0.1; // Adjust the scaling factor for left/right cards

    return (
        <div
            className="video-card"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            style={{
                transform: `scale(${baseScale})`,
                zIndex: isHighlighted ? 2 : 1,
                filter: isHighlighted ? 'none' : 'brightness(0.5)', // Darken non-highlighted cards
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
