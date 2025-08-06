'use client';

export default function PopupModal({ isOpen, onBack, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-[rgba(31,41,55,0.2)] flex justify-center items-center gap-2">
      <div className="w-[378px] h-[200px] bg-white shadow-2xl rounded-2xl z-50 p-[24px]">
        <p className="text-xl font-bold mb-2">Confirm</p>
        <p>
          You have unsaved changes. Are you sure you want to cancel creating
          this form?
        </p>
        <div className="flex justify-end mt-5">
          <button
            onClick={onBack}
            className="px-4 py-2 rounded text-black hover:bg-[#F3F4F6]"
          >
            Back
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded text-black hover:bg-[#F3F4F6]"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
