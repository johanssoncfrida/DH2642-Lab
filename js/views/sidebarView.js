const SidebarView=({guests, setGuests})=>
<div> <button onClick = {() => setGuests(guests - 1)}
    disabled = {guests===1}>-</button> 
     {guests}
     <button onClick = {() => setGuests(guests + 1)}>+</button> 
</div>;
