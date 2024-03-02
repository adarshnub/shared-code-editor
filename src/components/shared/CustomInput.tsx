"use client"

import { ChangeEvent } from "react";

type CustomInputsProps = {
    customInputs:string;
    setCustomInputs:React.Dispatch<React.SetStateAction<string>>;
}
const CustomInput = ({customInputs,setCustomInputs}:CustomInputsProps) => {

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCustomInputs(e.target.value)
    }
  return (
    <div>
        <textarea 
            rows={5}
            value={customInputs}
            onChange={handleChange}
            placeholder="Custom inputs"
            className="focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2"  />
    </div>
  )
}

export default CustomInput