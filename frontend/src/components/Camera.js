import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from '../colors';

const CameraWrapper = styled.div`
  background-color: ${palette.primary};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  margin-top: 20px;
`;

const Video = styled.video`
  width: 100%;
  border-radius: 10px;
`;

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    // Cleanup function to stop the camera when the component is unmounted
    return () => {
      const tracks = videoRef.current?.srcObject?.getTracks();
      if (tracks) {
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <CameraWrapper>
      <h2 style={{ color: palette.accent2 }}>Camera</h2>
      <Video ref={videoRef} width="640" height="480" autoPlay playsInline />
    </CameraWrapper>
  );
};

export default Camera;