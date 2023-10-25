function Card({strMealThumb,strMeal,strInstructions,}) {
    return (
        <div className="card w-96 bg-[#131111] shadow-xl m-4 ">
            <figure><img src={strMealThumb} className="w-44 m-3"  alt={strMeal}/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {strMeal}
                    
                </h2>
                <p>{strInstructions}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );

}
export default Card