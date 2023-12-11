import ProductCard from "./ProductCard";

const Products = ({ productsProp }) => {

    return (
        <section>
            <h2>Tous les produits :</h2>
            {productsProp.map((product) => {
                return <ProductCard product={product} />;
            })}
        </section>
    );
};
export default Products;