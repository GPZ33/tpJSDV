const BestArticle = ({ productsProp }) => {

    const bestArticle = productsProp.filter((product) => {
        return product.rating == 5;
    });
    console.log(bestArticle);
    return (
        <section>
            {bestArticle.map((product) => {
                return (
                    <article className='article'>
                        <h3>Le meilleur produit : </h3>
                        <p>{product.title}</p>
                    </article>
                );
            })}
        </section>
    );
};
export default BestArticle;