export const BlogCardSizeSort = (BlogData, belonging) => {
    return BlogData.filter(dataObj => dataObj.belonging === belonging);
}