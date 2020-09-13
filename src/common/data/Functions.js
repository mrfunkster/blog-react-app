export const BlogCardSizeSort = (BlogData, belonging) => {
    return BlogData.filter(dataObj => dataObj.belonging === belonging);
}

export const linkNameParser = (cardName) => {
    let linkName = cardName.toLowerCase().replace(/[ ]/g, '-').replace(/[ .]/g, '')
    return linkName
}

export const convertDate = (date) => {
    let dateRes = new Date(date)
    let monthsArray = ["Jan", "Feb", "Mar",  "Apri",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec"];
    let year = dateRes.getFullYear();
    let month = monthsArray[dateRes.getMonth()];
    let day = dateRes.getDate();
    let hours = dateRes.getHours();
    let minutes = dateRes.getMinutes();
    let seconds = dateRes.getSeconds();
    let resultString = `${month} ${day}, ${year} ${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    return resultString
}