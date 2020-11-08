const SidebarView=({guests, setGuests, dishes, removeDish, dishType, compareDishes})=>
<div> <button onClick = {() => setGuests(guests - 1)}
    disabled = {guests===1}>-</button> 
    {guests}
    <button onClick = {() => setGuests(guests + 1)}>+</button> 
    
    <table>{
        dishes.sort(compareDishes).map(dish =>
            <thead key = {dish.id + Math.random()}>
                <tr>
                    <td><button onClick = {e => removeDish(dish)} >x</button></td>
                    <td>{dish.title}</td>
                    <td>{dishType(dish)}</td>
                    <td>{dish.pricePerServing}</td>
                </tr>
                
                </thead>)}
                
                <th>Total: 
                    {Number.parseFloat(dishes.reduce((acc,currentValue)=>
                    acc+currentValue.pricePerServing,0)*guests).toFixed(2)} 
                </th>
                
                
    </table>
    
</div>;
