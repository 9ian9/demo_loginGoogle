"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/axiosInstance"; // dùng mock nếu chưa có API thật

export default function DetailInformation() {
  const { id } = useParams(); // lấy ID từ URL
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await api.get(`/position/${id}`);
        setPosition(response.data.result);
      } catch (error) {
        console.error("Failed to fetch position:", error);
      }
    };

    fetchPosition();
  }, [id]);

  if (!position) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">
        Position Detail: {position.title}
      </h1>
      <p>
        <strong>ID:</strong> {position.id}
      </p>
      <p>
        <strong>Status:</strong> {position.status}
      </p>
      <p>
        <strong>Location:</strong> {position.location}
      </p>
      <p>
        <strong>Description:</strong> {position.description}
      </p>
    </div>
  );
}
