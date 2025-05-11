import React from 'react';

const CopyButton = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return <button onClick={handleCopy}>Copy</button>;
};

export default CopyButton;

