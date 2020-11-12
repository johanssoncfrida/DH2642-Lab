const DetailsView=({dish, guests, dishAdded, addLabel,isDishInMenu, cancel:[navCallback,navLabel],h})=>
<div class = "detailsView">  
    <button onClick = {() => navCallback()}>{navLabel}</button>
    <button id= "addButton" onClick = {() =>  {dishAdded(dish)}} disabled = {isDishInMenu} key= {dish}>{addLabel}</button>
    <h1 id= "dishName">
        {dish.title}
    </h1>
    <div id = "imgAndPrice">
        <img id ="pictureInDetailsView" src={dish.image}></img>
        <span id = "priceAndGuests">
            <div>
            Price: {dish.pricePerServing}
            <br/>
            For <span title="nr. guests">
                {guests} 
            </span> guests: <span>
                {(dish.pricePerServing * guests).toFixed(2)}
            </span>
            </div>
        </span>
    </div>

    <ul id = "ingredientList">
        {dish.extendedIngredients.map(ingredient =>
            <li key={dish.title + Math.random()}>{ingredient.name}: {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}</li>
        )}
    </ul>

    <div id = "recipeInstruction">
            {dish.instructions}
    </div>
    <br/>
    <div id = "dishMoreInformation">
            <a href={dish.sourceUrl}>More information</a>
    </div>

</div>;