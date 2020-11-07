const DetailsView=({dish, guests, dishAdded, isDishInMenu})=>
<div className = "detailsView">  
    <button id= "addButton" onClick = {() =>  {dishAdded(dish)}} disabled = {isDishInMenu} key= {dish}>Add to menu</button>
    <h1 id= "dishName">
        {dish.title}
    </h1>
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