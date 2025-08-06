export default function InfoPositionItem({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-md font-semibold text-[#475467]">{value}</p>
    </div>
  );
}
