import React, { useState } from 'react';

const UploadForm = ({ setResult }) => {
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl) return;

    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Paste image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        style={{ width: '300px', marginRight: '1rem' }}
      />
      <button type="submit">Analyze</button>
    </form>
  );
};

export default UploadForm;
