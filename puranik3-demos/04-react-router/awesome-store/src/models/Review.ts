export default interface Review {
    id: number,
    createdDate: string,
    reviewer: string,
    productId: number,
    starRating: number,
    title: string,
    text: string
}