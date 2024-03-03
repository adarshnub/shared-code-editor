"use client";

import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import { languageOptions } from "@/constants/languageOptions";
import LanguagesDropdown from "./LanguagesDropdown";
import OutputDetails from "./OutputDetails";
import OutputWindow from "./OutputWindow";
import { Button } from "../ui/button";
import CustomInput from "./CustomInput";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const Landingpage = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(languageOptions[93]);
  const [theme, setTheme] = useState("cobalt");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [customInputs, setCustomInputs] = useState("");

  const onChange = (action:any, data:any) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled !", action, data);
      }
    }
  };

  function onSelectChange(sl: any) {
    console.log("selected option :", sl);
    setLanguage(sl);
  }

  function handleThemeChange(th: any) {}

  function handleCompile() {
    setProcessing(true);
//     console.log(process.env.NEXT_PUBLIC_RAPID_API_HOST);
// console.log(process.env.NEXT_PUBLIC_RAPID_API_KEY);
// console.log(process.env.NEXT_PUBLIC_RAPID_API_URL);

    const formData = {
        language_id:language.id,
        // encoded sorce code in base64
        source_code: btoa(code),
        stin: btoa(customInputs),
    }

    const options = {
        method: "POST",
        url : process.env.NEXT_PUBLIC_RAPID_API_URL,
        params: { base64_encoded: "true", fields: "*"},
        headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-HOST":process.env.NEXT_PUBLIC_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
        data: formData,
    }
    axios.request(options)
         .then(function(response) {
            console.log("res Data",response.data);
            const token = response.data.token;
            checkStatus(token);
         })
         .catch((err) => {
            let error = err.response ? err.response.data : err;
            setProcessing(false);
            console.log(error);
         })
  }

  const checkStatus = async(token:any) => {
    const options = {
        method: "GET",
        url: process.env.NEXT_PUBLIC_RAPID_API_URL + "/" + token,
        params: { base64_encoded: "true", fields: "*" },
        headers: {
            "X-RapidAPI-HOST":process.env.NEXT_PUBLIC_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
    }
    try {
        let response = await axios.request(options);
        let statusId = response.data.status?.id;

        // proceed -- we have a result
        if(statusId === 1 || statusId === 2) {
            // still processing..
            setTimeout(() => {
                checkStatus(token)
            }, 2000)
            return
        } else {
            setProcessing(false)
            setOutputDetails(response.data)
            toast.success("Compiled Successfully")
            console.log("Response Data",response.data )
            return
        }
    } catch (err) {
        console.log("err",err)
        setProcessing(false);
        toast.error("Failed to Compile")
    }
  }

  return (
    <div>
      <div>
        <LanguagesDropdown onSelectedChange={onSelectChange} />
      </div>

      <div>
        <CodeEditor
          code={code}
          onChange={onChange}
          language={language?.value}
          // theme={theme.value}
        />
      </div>

      <div>
        <OutputWindow outputDetails={outputDetails} />
        <div>
          <CustomInput
            customInputs={customInputs}
            setCustomInputs={setCustomInputs}
          />
          <Button onClick={handleCompile} disabled={!code}>
            {processing ? "Compiling..." : "Run"}
          </Button>
        </div>
      </div>

      <div>
        {outputDetails && <OutputDetails outputDetails={outputDetails} />}
      </div>
    </div>
  );
};

export default Landingpage;
