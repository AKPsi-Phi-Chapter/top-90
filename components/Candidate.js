import Image from 'next/image';
import Spacer from '@/components/Spacer'
import SubmitBtn from '@/components/SubmitBtn'
import { state, useState } from 'react'

export default function Candidate() {
    const [dropState, setDropState] = useState(false); 
    const rusheeList = ["George", "Lucas", "///", "///", "///","///","///", "///","///", "///", "///", "///", "///", "///",];
    function toggleDrop() {
        setDropState(!dropState);
    }
    return (
      <div className="w-[95%] lg:h-[95%] h-fit my-[2.5%] rounded-3xl shadow-lg bg-white flex lg:flex-row flex-col items-center lg:justify-center px-4 relative top-0">
        <Image
            priority
            src={"/filler.jpg"}
            className="lg:h-5/6 lg:w-[60vh] h-[90vw] w-[90%] object-cover bg-lgray lg:max-w-[45%] lg:max-h-[60vw] block mt-10 lg:mt-0 rounded-md"
            height={100}
            width={100}
            alt="candidate-profile"
        />
        <Spacer hgt="1px" wid="3vw"/>
        <div className="lg:w-[50%] w-[90%] flex flex-col justify-center items-center h-5/6 my-8">
            <button className="group relative flex flex-row items-center w-full h-12 text-md rounded-md border-[1.5px] border-bgray hover:cursor-pointer" onClick={toggleDrop}>
                <div className="w-[calc(100%-4rem)] flex items-center ml-4">Select One...</div>
                <div className="h-[2.8rem] w-16 flex justify-center items-center"><div className={dropState && "rotate-180"}>▼</div></div>
                { dropState && <div className="w-full h-72 rounded-md absolute bg-white top-[3.5rem] border-[1.5px] border-bgray overflow-hidden">
                  <div className="w-[calc(100%+17px)] h-72 overflow-y-scroll">
                    {rusheeList.map((rushee) => <button className="w-full h-12 text-left px-4 hover:bg-lgray">{rushee}</button>)}
                  </div>
                </div>
                }
            </button>
            <Spacer hgt="2rem" wid="80px"/>
            <textarea className="h-[calc(78vh-12rem)] w-[99.5%] bg-lgray lg:mt-0 rounded-md outline-0 p-3" placeholder="Write your comments here">
            </textarea>
            <Spacer hgt="2rem" wid="80px"/>
            <SubmitBtn hgt="5rem" wid="100%" func=""/>
        </div>
      </div>  
    );
}