const SummaryView = ({h,guests, dishes, ingredients,nav:[navCallback,navLabel]}) =>

<div class = "menuInSummary">
          <button id = "BackToSearchButton" onClick = {() => navCallback()}>{navLabel}</button>
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
<div class ="shoppingList" title = "Shopping list">
     <h1 class= "shoppingListHeader">Shopping list</h1>
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

function compareIngredients(a,b){
    
     if(a.aisle < b.aisle)
         return -1;
     else if(a.aisle > b.aisle)
         return 1;
     
     else if(a.name < b.name)
         return -1;
     else if(a.name >b.name)
         return 1;
     else 
         return 0;
     
 }