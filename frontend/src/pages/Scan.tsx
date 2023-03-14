import React, {useState, useRef} from 'react';
import Quagga from "quagga-scanner";

const Scan = (): JSX.Element => {
    const [code, setCode] = useState<string>('');
    const [src, setSrc] = useState<any>(null);
    const videoRef = useRef<HTMLVideoElement>(document.createElement("video"));

    const camPermission = {audio:false, video: true};
    const mediaDevices = [MediaStream];
    console.log(mediaDevices);
    
    navigator.mediaDevices.getUserMedia(camPermission)
        .then((stream)=>{
            const videoTracks = stream.getVideoTracks();
            console.log("Got stream with constraints:", camPermission);
            console.log(`Using video device: ${videoTracks[0].label}`);
            stream.onremovetrack = () => {
                console.log("Stream ended");
            };

            videoRef.current.srcObject = stream;
            
        })
        .catch((error) => {
            if (error.name === "ConstraintNotSatisfiedError") {
              console.error("Resolution is not supported");
            } else if (error.name === "PermissionDeniedError") {
              console.error(
                "You need to grant this page permission to access your camera and microphone."
              );
            } else {
              console.error(`getUserMedia error: ${error.name}`, error);
            }
        });
    

    return (
        <div id="scanner">
            <select name="" id=""></select>
            <video ref={videoRef} autoPlay={true}></video>
            <p> {code} </p>
        </div>
    )
}

export default Scan;