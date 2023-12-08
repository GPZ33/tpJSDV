import './App.css';
const BestArticle = ({ productsProp }) => {

    const bestArticle = productsProp.filter((product) => {
        return product.rating == 5;
    });
    console.log(bestArticle);
    return (
        <section>
            {bestArticle.map((product) => {
                return (
                    <article>
                        <h3>Le meilleur produit : {product.title}</h3>
                    </article>
                );
            })}
        </section>
    );
};
export default BestArticle;