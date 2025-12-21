import "./../styles/products.css";

function Products() {
    return (
        <>
            <div className="products-box skeleton">
                <div className="rectangle">
                    <div className="grid">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div className="rectangle-box" key={i}>
                                <div className="img-skeleton"></div>
                                <div className="text-skeleton"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products;