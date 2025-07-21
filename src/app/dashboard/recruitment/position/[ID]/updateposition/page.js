'use client';
import HeaderContent, { BreakCrumbs } from '@/components/HeaderContent';
import PositionInformation from '@/components/form/PositionInformation';
import { useState, useEffect } from 'react';
import api from '@/lib/axiosInstance';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import PopupModal from '@/components/form/popupModal';

export default function FormPosition() {
  const [detailPosition, setDetailPosition] = useState();
  const { id: positionID } = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  useEffect(() => {
    const fetchDataForm = async () => {
      try {
        const response = await api.get(`/position/${positionID}`);
        setDetailPosition(response.data.result);
      } catch (error) {
        console.log('Error fetching position details:', error);
      }
    };
    fetchDataForm();
  }, [positionID]);

  const handleUpdate = async (dataUpdate) => {
    try {
      const response = await api.patch(
        `/position/update/${positionID}`,
        dataUpdate,
      );
      if (response.status === 200 || response.status === 201) {
        router.push(`/dashboard/recruitment/position/${positionID}`);
      }
    } catch (error) {
      console.log('Error updating position: ', error);
    }
  };
  const handleBack = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(true);
  };
  const handleConfirm = () => {
    setIsOpen(false);
    setFormKey((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col w-full pt-4">
      <BreakCrumbs />
      <HeaderContent title={'Details Position'} description={''} />
      <PopupModal
        isOpen={isOpen}
        onBack={handleBack}
        onConfirm={handleConfirm}
      />
      <div className="flex justify-center mt-3">
        <PositionInformation
          key={formKey}
          initialDataForm={detailPosition}
          category="Update"
          onSubmit={handleUpdate}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
