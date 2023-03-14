import React, {useState, useRef} from 'react';
import Quagga from "quagga-scanner";

const Scan = () => {
    const [code, setCode] = useState<string>('');
    const [mediaDevices, setMediaDevices] = useState<MediaDeviceInfo[]>([]);
    const [actualDeviceId, setActualDeviceId] = useState<string>("");

    const videoRef = useRef<HTMLVideoElement>(document.createElement("video"));

    navigator.mediaDevices.enumerateDevices().then((data)=> setMediaDevices(data));
    
    const getOption = function(device: MediaDeviceInfo){
        if(device.kind === "videoinput"){
            if(actualDeviceId === "") setVideoDevice(device.deviceId);

            return <option key={device.deviceId} value={device.deviceId}>{device.label}</option>
        }
    }

    const setVideoDevice = function(id: string){
        setActualDeviceId(id)
        navigator.mediaDevices.getUserMedia({video: {deviceId: id}})
        .then((stream)=> videoRef.current.srcObject = stream)
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
    }

    return (
        <div className='flex'>
            <select className='rounded-full px-4 h-8 bg-darkGrey' onChange={(event)=> setVideoDevice(event.target.value)}>
            {
                mediaDevices.map(getOption)
            }
            </select>
            <video ref={videoRef} autoPlay={true}></video>
            <p> Code: {code} </p>
        </div>
    )
}

export default Scan;