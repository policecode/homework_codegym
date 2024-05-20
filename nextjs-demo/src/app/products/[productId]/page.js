export default function ProductDetailPage({params}) {
    const {productId} = params;
    return (
        <h1>Page detail {productId}</h1>
    )
}