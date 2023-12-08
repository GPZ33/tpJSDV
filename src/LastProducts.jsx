import './App.css';
const LastProducts = ({productsProp}) => {
    const LastProducts = productsProp.slice(-5);
    return (
        <section>
            <h2>Les derniers produits :</h2>
            {LastProducts.map((product) => {
                return (
                    <article>
                        <h3>{product.title}</h3>
                        <p>{product.price} €</p>
                    </article>
                );
            })}
        </section>
    );
};
export default LastProducts;