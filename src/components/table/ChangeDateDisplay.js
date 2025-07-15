export function ChangeDateDisplay(isoDate){
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString('en-GB'); 
    return formattedDate;
}