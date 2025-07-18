'use client';
import { useState, useEffect } from 'react';
import api from '@/lib/axiosInstance';

export default function ItemCount({ category }) {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/dashboard/counts');
        setCount(response.data.result[category]);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [category]);

  if (count === null || count === undefined)
    return (
      <>
        <div className="flex justify-center items-center space-x-2 h-full">
          0
        </div>
      </>
    );
  return <p>{count}</p>;
}
