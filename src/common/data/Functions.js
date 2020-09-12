export const BlogCardSizeSort = (BlogData, belonging) => {
    return BlogData.filter(dataObj => dataObj.belonging === belonging);
}

export const linkNameParser = (cardName) => {
    let linkName = cardName.toLowerCase().replace(/[ ]/g, '-').replace(/[ .]/g, '')
    return linkName
}