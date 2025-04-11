import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

function CodeEditor({ language, code, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: code,
        language: language,
        theme: 'vs-dark',
      });

      editor.onDidChangeModelContent(() => {
        onChange(editor.getValue());
      });

      return () => editor.dispose();
    }
  }, [language, code, onChange]);

  return <div ref={editorRef} style={{ width: '100%', height: '400px', border: '1px solid #ccc' }} />;
}

export default CodeEditor;