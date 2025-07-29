'use client';
import HeaderContent, { BreakCrumbs } from '@/components/HeaderContent';
import PositionInformation from '@/components/form/PositionInformation';
import { useRouter } from 'next/navigation';
import api from '@/lib/axiosInstance';
import PopupModal from '@/components/form/PopupModal';
import { useState } from 'react';
export default function FormPosition() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [actionType, setActionType] = useState(null);

  const handleCreate = async (dataForm) => {
    try {
      const response = await api.post('/position', dataForm);

      if (response.status === 200 || response.status === 201) {
        const positionID = response.data.result;
        router.push(`/dashboard/recruitment/position/${positionID}`);
      } else {
        console.log('Error send', response);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };
  const handlePopupBack = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(true);
    setActionType('cancel');
  };
  const handleConfirm = () => {
    if (actionType !== 'cancel') {
      router.push(`/dashboard/recruitment`);
    } else {
      setIsOpen(false);
      setFormKey((prev) => prev + 1);
    }
  };
  const handleExit = () => {
    setIsOpen(true);
    setActionType('back');
  };
  return (
    <div className="flex flex-col w-full pt-4">
      <BreakCrumbs popup={true} onExit={handleExit} />
      <HeaderContent title={'Create Position'} description={''} />
      <PopupModal
        isOpen={isOpen}
        onBack={handlePopupBack}
        onConfirm={handleConfirm}
      />
      <div className="flex justify-center mt-3">
        <PositionInformation
          key={formKey}
          category="Create"
          onSubmit={handleCreate}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
