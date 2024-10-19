import React, { useState } from 'react';
import './App.css';
import VideoSection from './components/VideoSection';
import VideoModal from './components/VideoModal';

function App() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = (videoSrc) => {
        setSelectedVideo(videoSrc);
        setIsPlaying(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsPlaying(false);
    };

    return (
        <div className="App">
            {isPlaying && <div className="blur-overlay"></div>}
            <VideoSection onVideoClick={handleVideoClick} />
            {selectedVideo && <VideoModal videoSrc={selectedVideo} onClose={closeModal} />}
        </div>
    );
}

export default App;
