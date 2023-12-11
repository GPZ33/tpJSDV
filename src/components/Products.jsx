const Products = ({ productsProp }) => {

    return (
        <section>
            <h2>Tous les produits :</h2>
            {productsProp.map((products) => {
                return (
                    <article className="article">
                        <h3> {products.title} </h3>
                        <p>{products.price} €</p>
                    </article>
                );
            })}
        </section>
    );
};
export default Products;