const SidebarView=({guests, setGuests, dishes, removeDish, dishType, compareDishes})=>
<div> 
    <h1 className = "headerGuests"> Number of guests</h1>
    <div className = "buttonsAndGuests"><button className = "buttonSidebar" onClick = {() => setGuests(guests - 1)}
    disabled = {guests===1}>-</button> 
    {guests}
    <button className = "buttonSidebar" onClick = {() => setGuests(guests + 1)}>+</button> </div>
    <h1 className = "headerDishes">Your dishes</h1>
    <table className = "table">
   {
        dishes.sort(compareDishes).map(dish =>
            <tbody key = {dish.id + Math.random()}>
                <tr>
                    <td>{dish.title}</td>
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
    
    </div>;
