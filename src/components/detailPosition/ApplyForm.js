export default function ApplyForm() {
  return (
    <div className="px-8 flex justify-center ">
      <div className="flex flex-col w-full max-w-[890px]">
        <div className="flex justify-between">
          <p className="font-semibold">Apply form</p>
          <div className="flex items-center gap-2">
            <span className="text-sm">Link to form</span>
            <input type="checkbox" value="synthwave" className="toggle" />
          </div>
        </div>
      </div>
    </div>
  )
}
