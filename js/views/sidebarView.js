const SidebarView=({guests, setGuests, dishes, removeDish, dishChosen, navCallback,navLabel,h})=>
<div> 
    <h1 class = "headerGuests"> Choose number of guests</h1>
    <div class = "buttonsAndGuests"><button class = "buttonSidebar" onClick = {() => setGuests(guests - 1)}
    disabled = {guests===1}>-</button> 
    {guests}
    <button class = "buttonSidebar" onClick = {() => setGuests(guests + 1)}>+</button> </div>
    <h1 class = "headerDishes">Your dishes</h1>
    
    <table class = "table">
   {
        dishes.sort(compareDishes).map(dish =>
            <tbody key = {dish.id + Math.random()}>
                <tr>
                    <td><a id = "sideBarClickabeName" onClick = {event=> dishChosen(dish.id)}>{dish.title}</a></td>
                    <td>{dishType(dish)}</td>
                    <td>{dish.pricePerServing}</td>
                    <td><button onClick = {e => removeDish(dish)} >x</button></td>
                </tr>
                
                </tbody>)}
                <tbody>
                <tr>
                    <td>Total: 
                    {Number.parseFloat(dishes.reduce((acc,currentValue)=>
                    acc+currentValue.pricePerServing,0)*guests).toFixed(2)} 
                     </td>
                    
                </tr>
                </tbody>
                
                
                
    </table>
    <button  id = "summaryButton" onClick = {() => navCallback()}>{navLabel}</button>
    </div>;
const types=["starter", "main course", "dessert"];
function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
	    return tp[0];
    return "";
}
function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    if(ai < bi)
        return -1;
    else if(ai > bi)
        return 1;
    else(ai === bi)
        return 0;
}