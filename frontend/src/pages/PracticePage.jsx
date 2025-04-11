import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';

function PracticePage({ match }) {
  const [code, setCode] = useState('// Write your code here');
  const language = match.params.id;

  const handleRun = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      alert('Error running code: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Practice {language}</h1>
      <CodeEditor language={language} code={code} onChange={setCode} />
      <button onClick={handleRun} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
        Run Code
      </button>
    </div>
  );
}

export default PracticePage;