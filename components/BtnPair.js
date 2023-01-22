import Spacer from '@/components/Spacer'
import SubmitBtn from '@/components/SubmitBtn'
import { state, useState } from 'react'

export default function BtnPair({ func }) {
    const [fileName, setFileName] = useState("Click here to upload CSV");

    return (
        <div className="w-[min(500px, 90vw)] flex flex-col justify-center">
            <div className="relative">
                <input type="file" className="w-full h-24" onChange={(e) => setFileName(e.target.value)}/>
                <div className="pointer-events-none absolute h-24 w-full top-0 bg-white border-dashed border-[1.5px] border-black hover:cursor-pointer text-sm flex justify-center items-center">
                    {fileName}
                </div>
            </div>
            <Spacer hgt="1rem" wid="2rem"/>
            <SubmitBtn hgt="3rem" wid="100%"/>
        </div>
    );
}