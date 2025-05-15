import React, { useState } from 'react';

const UploadForm = ({ setResult }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError('Пожалуйста, выберите изображение.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://fastapi-backend-mrgn.onrender.com/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Ошибка при загрузке:', err);
      setError('Произошла ошибка при анализе изображения.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit" disabled={loading}>
        {loading ? 'Анализирую...' : 'Проанализировать'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default UploadForm;
