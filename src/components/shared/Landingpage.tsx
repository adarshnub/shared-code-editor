"use client"

import React, { useState } from 'react'
import CodeEditor from './CodeEditor'
import { languageOptions } from '@/constants/languageOptions';
import LanguagesDropdown from './LanguagesDropdown';

const Landingpage = () => {
    const [code , setCode] = useState();
    const [language, setLanguage] = useState(languageOptions[0]);
    const [theme, setTheme] = useState("cobalt");

    const onChange = (action, data) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled !", action, data);
            }
        }
    }

    function onSelectChange (sl:any) {
        console.log("selected option :",sl)
        setLanguage(sl);
    }

    function handleThemeChange(th:any) {}
  return (
    <div>

        <div>
            <LanguagesDropdown 
              onSelectedChange={onSelectChange} />
        </div>

        <div>
            <CodeEditor 
            code={code}
            onChange={onChange}
            language={language?.value}
            // theme={theme.value}
             />
        </div>

        
    </div>
  )
}

export default Landingpage