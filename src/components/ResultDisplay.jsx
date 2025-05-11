import React from 'react';
import CopyButton from './CopyButton';

const ResultDisplay = ({ result }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>AI Result:</h3>
      <p><strong>Object:</strong> {result.object}</p>
      <p><strong>Caption:</strong> {result.caption}</p>
      <p><strong>Hashtags:</strong> {result.hashtags}</p>
      <CopyButton text={`${result.caption}\n${result.hashtags}`} />
    </div>
  );
};

export default ResultDisplay;
