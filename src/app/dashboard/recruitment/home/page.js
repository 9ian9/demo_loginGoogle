'use client';
import { useState } from 'react';

export default function FormGenerator() {
  const [formUrl, setFormUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreateForm = async () => {
    setLoading(true);
    setError('');
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxCn_Kfh-7jH92GF-BaXT6dm6vKtk7vfg8aMrBsN8U2L5D31P88_R9S-wQX5HRJEfy9gQ/exec';

    const data = {
      title: 'Form đăng ký thực tập',
      questions: JSON.stringify([
        { type: 'text', title: 'Họ và tên' },
        { type: 'text', title: 'Email' },
        {
          type: 'multiple',
          title: 'Vị trí ứng tuyển',
          options: ['FE', 'BE', 'QA'],
        },
      ]),
    };

    try {
      const res = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(data),
      });

      const result = await res.json();

      if (result.success) {
        setFormUrl(result.url);
      } else {
        setError('Không tạo được form. Kiểm tra Apps Script.');
      }
    } catch (err) {
      setError('Lỗi khi gửi request: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Tạo Google Form từ Web</h1>
      <button onClick={handleCreateForm} disabled={loading}>
        {loading ? 'Đang tạo...' : 'Tạo Form Google'}
      </button>

      {formUrl && (
        <div style={{ marginTop: 20 }}>
          <strong>Link Form:</strong>{' '}
          <a href={formUrl} target="_blank" rel="noopener noreferrer">
            {formUrl}
          </a>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
