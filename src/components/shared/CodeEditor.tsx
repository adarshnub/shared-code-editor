"use client";

/// <reference types="monaco-editor" />



// const Editor = dynamic(() => import('@monaco-editor/react'), {
//   ssr: false
// });
// import {Editor } from "@monaco-editor/react";
import  Editor,  {useMonaco, loader } from '@monaco-editor/react';
import * as monaco from "monaco-editor";
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import _ from "lodash";


// loader.init();

const socket = io("");

type CodeEditorProps = {
  onChange: (name: string, value: string) => void;
  language?: string;
  code?: string;
  theme?: string;
};
const CodeEditor = ({ onChange, language, code, theme }: CodeEditorProps) => {

  
  const monaco = useMonaco();
  const [value, setValue] = useState(code || "");

  // useEffect(() => {
   
  //     loader.init();
    
  // }, []);

  useEffect(() => {
    
    //event listner to recive change from user
    socket.on("codeChange", (newValue: any) => {
      console.log(newValue.id, "NEW VALUE");

      if (monaco) {
        const model = monaco.editor.getModels()[0]; //single model
        model.setValue(newValue.value);
      }
    });

    return () => {
      socket.off("codeChange");
    };
  }, [monaco]);

  // const handleEditorChange = (value:string | undefined, event: monaco.editor.IModelContentChangedEvent) => {
  //     if (typeof value === 'string') {
  //         setValue(value);
  //         // console.log(value)
  //     onChange("code", value);

  //     }
  // }

  const handleEditorChange = (newValue: string | undefined) => {
    if (typeof newValue === "string") {
      setValue(newValue);
      onChange("code", newValue);
      const messageId = Date.now(); // as a unique id for each message
      socket.emit("codeChange", { id: messageId, value: newValue });
      console.log(newValue, "VALUE DATA");
    }

    //emit code change to other users
  };

  const debouncedHandleEditorChange = _.debounce(handleEditorChange, 500);
  return (
    <div className="w-full h-full">
      <Editor
        height="50vh"
        width="80vw"
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// write code here"
        onMount={(editor, monaco) => {
          const model = monaco.editor.getModels()[0]; //single model
          model.setValue(value);
        }}
        onChange={debouncedHandleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
