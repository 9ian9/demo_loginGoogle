function ResetButton({onClick}){
    return(
        <button className="btn btn-ghost btn-sm flex px-3 py-1.5" onClick={onClick}>
            <p className="text-sm font-medium text-[#0C376C]">Reset</p>
        </button>
    )
}
export default ResetButton;