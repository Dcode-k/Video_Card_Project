import React, { useState, useEffect } from 'react';
import './VideoSection.css';
import VideoCard from './VideoCard';

function VideoSection({ onVideoClick }) {
    const [highlightedIndex, setHighlightedIndex] = useState(2); // Default to the middle video index
    const videoList = [
        {
            videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg', // Thumbnail for Video 1
        },
        {
            videoSrc: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
            image: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg', // Thumbnail for Video 2
        },
        {
            videoSrc: 'https://www.youtube.com/embed/L_jWHffIx5E',
            image: 'https://img.youtube.com/vi/L_jWHffIx5E/0.jpg', // Thumbnail for Video 3
        },
        {
            
            videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
            image: 'https://img.youtube.com/vi/9bZkp7q19f0/0.jpg', // Thumbnail for Video 4
        },
        {
            videoSrc: 'https://www.youtube.com/embed/tgbNymZ7vqY',
            image: 'https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg', // Thumbnail for Video 5
        },
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
            {videoList.map((video, index) => (
                <VideoCard
                    key={index}
                    videoSrc={video.videoSrc}
                    image={video.image} // Pass the image URL
                    onClick={() => onVideoClick(video.videoSrc)}
                    highlightedIndex={highlightedIndex} // Pass the highlighted index
                    index={index} // Pass the current index
                    onMouseEnter={() => handleMouseEnter(index)}
                />
            ))}
        </div>
    );
}

export default VideoSection;
