const DetailsView=({dish, guests})=>
<div class = "detailsView">  
    <div id= "dishName">
        {dish.title}
    </div>

    <div id = "imgAndPrice">
        <img src={dish.image}></img>
        <span id = "priceAndGuests">
            <div>
            Price: {dish.pricePerServing}
            <br/>
            For <span title="nr. guests">
                {guests} 
            </span> guests: <span>
                {dish.pricePerServing * guests}
            </span>
            </div>
        </span>
    </div>

    <ul id = "ingredientList">
        {dish.extendedIngredients.map(ingredient =>
            <li key={ingredient.name}>{ingredient.name}: {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}</li>
        )}
    </ul>

    <div id = "recipeInstruction">
            {dish.instructions}
    </div>

    <div id = "dishMoreInformation">
            <a href={dish.sourceUrl}>More information</a>
    </div>

</div>;