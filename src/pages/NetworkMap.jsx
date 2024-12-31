import React, { useState, useEffect } from 'react';
import MAP from '../assets/maps/NetworkMap.png';
import LOGO_VIDEO from '../assets/logo-loading.mp4'; // Path to your uploaded video

const NetworkMap = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // Track video state
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track image loading state
  const [forcePlayVideo, setForcePlayVideo] = useState(true); // Ensures video plays at least once

  // Handle Video End
  const handleVideoEnd = () => {
    if (isImageLoaded) {
      setIsVideoPlaying(false); // Stop video only if image is loaded
    } else {
      setForcePlayVideo(false); // Video will loop until image finishes loading
    }
  };

  // Handle Image Load
  const handleImageLoad = () => {
    setIsImageLoaded(true); // Mark image as loaded
  };

  // Effect to ensure video plays at least once
  useEffect(() => {
    if (isImageLoaded && !forcePlayVideo) {
      setIsVideoPlaying(false); // Stop video after at least one play and image load
    }
  }, [isImageLoaded, forcePlayVideo]);

  return (
    <div className="w-full h-screen overflow-auto border shadow-lg relative bg-white">
      {/* Video Loader */}
      {isVideoPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <video
            src={LOGO_VIDEO}
            autoPlay
            muted
            loop={!isImageLoaded} // Loop only if image isn't fully loaded
            className="w-32 h-32 object-contain"
            onEnded={handleVideoEnd} // Trigger when video ends
          />
        </div>
      )}

      {/* High-Resolution Image */}
      <img
        src={MAP}
        alt="Delhi Metro Network Map"
        onLoad={handleImageLoad} // Trigger when image loads
        className={`w-full h-auto object-contain transition-opacity duration-500 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default NetworkMap;
