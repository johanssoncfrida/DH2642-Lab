const SidebarView=({guests, setGuests, dishes, removeDish})=>
<div> <button onClick = {() => setGuests(guests - 1)}
    disabled = {guests===1}>-</button> 
    {guests}
    <button onClick = {() => setGuests(guests + 1)}>+</button> 
    <div>{
        dishes.map(dish =>
            <div key = {dish.id}>
                <button onClick = {e => removeDish(dish)} >x</button>
                {dish.title}
                </div>)}
         
     </div>
</div>;
