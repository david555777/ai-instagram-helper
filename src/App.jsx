import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ResultDisplay from './components/ResultDisplay';

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>AI Instagram Helper</h1>
      <UploadForm setResult={setResult} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default App;

