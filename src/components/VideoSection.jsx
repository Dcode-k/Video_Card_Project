import React, { useState, useEffect } from 'react';
import './VideoSection.css';
import VideoCard from './VideoCard';

function VideoSection({ onVideoClick }) {
    const [highlightedIndex, setHighlightedIndex] = useState(2); // Default to the middle video index
    const videoList = [
        'https://www.w3schools.com/html/movie.mp4',
        'https://www.w3schools.com/html/movie.mp4',
        'https://www.w3schools.com/html/movie.mp4',
        'https://www.w3schools.com/html/movie.mp4',      
        'https://www.w3schools.com/html/movie.mp4',
    ];

    const handleMouseEnter = (index) => {
        setHighlightedIndex(index);
    };

    useEffect(() => {
        // Set the middle video as the default highlighted when the component mounts
        setHighlightedIndex(Math.floor(videoList.length / 2));
    }, []);

    return (
        <div className="video-section">
            {videoList.map((videoSrc, index) => {
                const isHighlighted = highlightedIndex === index;
                const baseScale = 1.2; // Scale for the highlighted video
                const scale = isHighlighted ? baseScale : 1 - Math.abs(highlightedIndex - index) * 0.15;

                return (
                    <VideoCard
                        key={index}
                        videoSrc={videoSrc}
                        onClick={() => onVideoClick(videoSrc)}
                        scale={scale}
                        onMouseEnter={() => handleMouseEnter(index)}
                        isHighlighted={isHighlighted}
                    />
                );
            })}
        </div>
    );
}

export default VideoSection;
