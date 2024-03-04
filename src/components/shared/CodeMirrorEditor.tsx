"use client"

import React, { useEffect, useRef } from 'react'
import CodeMirror, { EditorFromTextArea } from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/php/php';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/perl/perl';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';


const CodeMirrorEditor = () => {

    // const editorRef = useRef(null)
    // const editorRef = useRef<EditorFromTextArea | null>(null);
    const editorRef = useRef<EditorFromTextArea>();

    useEffect(() => {
        // codemirror instance
        const textarea = document.getElementById('realtimeEditor') as HTMLTextAreaElement;
        editorRef.current = CodeMirror.fromTextArea(textarea, {
            mode: 'javascript',
            theme: 'nord',
            autoCloseTags:true,
            autoCloseBrackets:true,
            lineNumbers:true,
        })
    },[])
  return (
    <div>
        <textarea id="realtimeEditor"></textarea>
    </div>
  )
}

export default CodeMirrorEditor