"use client"

/// <reference types="monaco-editor" />


import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor';

import React, { useState } from 'react'


type CodeEditorProps = {
    onChange:(name:string, value:string) => void;
    language?:string;
    code?:string;
    theme?:string;
}
const CodeEditor = ({onChange, language, code, theme}:CodeEditorProps) => {
    const [value,setValue] = useState(code || "");

    const handleEditorChange = (value:string | undefined, event: monaco.editor.IModelContentChangedEvent) => {
        if (typeof value === 'string') {
            setValue(value);
        onChange("code", value);
        }
    }
  return (
    <div className='w-full h-full'>
        <Editor 
          height="85vh"
          width="80vw"
          language={language || "javascript"}
          value={value}
          theme={theme}
          defaultValue='// write code here'
          onChange={handleEditorChange} />
    </div>
  )
}

export default CodeEditor