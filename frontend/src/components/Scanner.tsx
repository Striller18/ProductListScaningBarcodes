import React, {useState, useRef, useEffect, Component} from 'react';
import Quagga from "quagga-scanner";
import '../css/Scanner.css'

const Scanner = (props: {deviceId: string}) => {
    const [code, setCode] = useState<string>('');
    const scannerRef = useRef<HTMLDivElement>(document.createElement("div"));
    
    useEffect(() => {
        console.log("HOLA")
        Quagga.init({
            inputStream : {
                name : "Live",
                type : "LiveStream", // Or '#yourElement' (optional)
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
            console.log("before error")
            if (err) {
                console.error(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });

        Quagga.onDetected(function (result) {
            console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
        });
    },[])
    

    
    
    return (
        <div className='flex flex-col gap-5 w-full'>
            <p> Code: {code} </p>
        </div>
    )
}



export default Scanner;