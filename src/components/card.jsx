function Card({ strMealThumb, strMeal, strInstructions, }) {
    return (
        <>
            <div className="card h-96 w-96 bg-primary text-primary-content shadow-xl m-4 ">

                <figure><img src={strMealThumb} className="w-60 m-3" alt={strMeal} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {strMeal}

                    </h2>
                    <p> <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
         
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">{strInstructions}</p>
                </div>
            </dialog>
        </>
    );

}
export default Card