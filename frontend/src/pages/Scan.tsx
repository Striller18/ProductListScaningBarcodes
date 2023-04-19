import React, {useState, useRef, useEffect} from 'react';
import Quagga from "quagga-scanner";
import Scanner from '../components/Scanner';

const Scan = () => {
    const [mediaDevices, setMediaDevices] = useState<MediaDeviceInfo[]>([]);
    const [actualDeviceId, setActualDeviceId] = useState<string>("");
    const videoRef = useRef<HTMLVideoElement>(document.createElement("video"));

    const [isScannerActive, setIsScannerActive] = useState(false);
    const [scannerResult, setScannerResult] = useState<string>("");

    navigator.mediaDevices.enumerateDevices().then((data)=> setMediaDevices(data));
    
    const createOptionElement = function(device: MediaDeviceInfo){//Funcion para rellenar el selector de dispositivos
        if(device.kind === "videoinput"){
            if(actualDeviceId === "") {
                setVideoDevice(device.deviceId);
                return <option key={device.deviceId} value={device.deviceId} selected>{device.label}</option>
            }else return <option key={device.deviceId} value={device.deviceId}>{device.label}</option>
        }
    }

    const setVideoDevice = function(id: string){
        setActualDeviceId(id)
        navigator.mediaDevices.getUserMedia({video: {deviceId: id}})
        .then((stream)=> videoRef.current.srcObject = stream)
        .catch((error) => {
            if (error.name === "ConstraintNotSatisfiedError") alert("Resolution is not supported");
            else if (error.name === "PermissionDeniedError") alert("You need to grant this page permission to access your camera and microphone.");
            else console.error(`getUserMedia error: ${error.name}`, error)
        });
    }
    
    useEffect(() => {
        //Inicializar Quagga
        Quagga.init({
            inputStream : {
                name : "Live",
                type : "LiveStream",
                constraints: {
                    deviceId: actualDeviceId
                }
            },
            decoder: {
                readers: [
                    "code_128_reader",
                    "ean_reader",
                    "ean_8_reader"
                ]
            }
        }, function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
            setIsScannerActive(true);
        });

        Quagga.onDetected(function (result) {
            console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
            setScannerResult(result.codeResult.code);
        });

        // return () => {
        //     Quagga.stop();
        //     setIsScannerActive(false);
        // };
        console.log(import.meta.env.APIKEY_PRODUCT_LIST)
    },[])

    return (
        <div className='flex flex-col gap-5 w-full'>
            <select className='rounded-full px-4 h-8 bg-darkGrey' onChange={(event)=> setVideoDevice(event.target.value)}>
                {mediaDevices.map(createOptionElement)}
            </select>
            <div id="interactive" className="viewport"/>
            <p>{scannerResult}</p>
            {/* <Scanner key={actualDeviceId} deviceId={actualDeviceId}/> */}
        </div>
    )
}

export default Scan;