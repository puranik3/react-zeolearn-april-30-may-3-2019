export default interface Review {
    id: number,
    createdDate: string,
    reviewer: string,
    productId: number | string,
    starRating: number,
    title: string,
    text: string
}