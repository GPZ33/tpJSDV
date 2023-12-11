import ProductCard from "./ProductCard";

const LastProducts = ({ productsProp }) => {
    const publishedProducts = productsProp.filter((product) => {
        return product.isPublished === true;
    });

    const lastPublishedProducts = publishedProducts.slice(-3);

    return (
        <section>
            <h2>Les derniers produits publiés : </h2>
            {lastPublishedProducts.map((product) => {
                return <ProductCard product={product} />;
            })}
        </section>
    );
};
export default LastProducts;