import { iconDetailPosition } from "@/components/icon/iconDetailPosition";

export function EditButton({onclick}) {
  return (
    <button className="btn btn-sm px-3 py-1.5 gap-2 rounded-lg" onClick={onclick}>
      {iconDetailPosition.iconEdit}
      <span className="text-[#1F2937]">Edit</span>
    </button>
  );
}
