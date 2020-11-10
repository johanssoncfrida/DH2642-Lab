const SummaryView = ({guests, dishes, ingredients, compareIngredients,nav:[navCallback,navLabel]}) =>

<div className = "menuInSummary">
     <button onClick = {() => navCallback()}>{navLabel}</button>
     <div >
          <h1>
               Menu
          </h1>
     </div>
<div title = "summary">
     Dinner for <span title="nr. guests">
          {guests}
          
     </span> guests 
     <div>{
        dishes.map(dish =>
            <div key = {dish.id}>
                <li>{dish.title}</li>
                
                </div>)}
         
     </div>
</div>
<div className ="shoppingList" title = "Shopping list">
     <h1 className= "shoppingListHeader">Shopping list</h1>
          <table id="ingredientList">
               <thead>
                    <tr id = "ingredientAisleQuantity"><td>ingredient</td><td>Aisle</td><td>Quantity</td></tr>
               </thead>
               <tbody>{
               ingredients.sort(compareIngredients).map(ingredient =>
                    <tr key = {ingredient.id}>
                         <td>{ingredient.ingredientName}</td>
                         <td>{ingredient.aisle}</td>
                         <td>{ingredient.amount.amount}{ingredient.amount.unitShort}</td>
                    </tr>
               )}</tbody>
          </table>
     </div>
     
</div>;