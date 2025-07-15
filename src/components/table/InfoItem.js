export function InfoItem({data}){
    const { mainText, subText, classMainText, classSubText } = data;
    return(
      <div className='flex flex-col'>
          <p className={classMainText}>{mainText}</p>
          <p className={classSubText}>{subText}</p>
      </div>
    )
}