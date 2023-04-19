import React, {useState, useRef, useEffect} from 'react';
import Quagga from "quagga-scanner";
import '../css/Scanner.css'

const Scanner = (props: {deviceId: string}) => {
    const [isScannerActive, setIsScannerActive] = useState(false);
    const [scannerResult, setScannerResult] = useState<string>("");
    
    useEffect(() => {
        //Inicializar Quagga
        Quagga.init({
            inputStream : {
                name : "Live",
                type : "LiveStream",
                constraints: {
                    deviceId: props.deviceId
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
    },[])
    
    return (
        <div className='flex flex-col gap-5 w-full'>
            <p>{props.deviceId}</p>
        </div>
        
    )
}



export default Scanner;