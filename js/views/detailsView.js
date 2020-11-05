const DetailsView=({dish, guests})=>
<div>  
    <div title = "detailsView">
        {JSON.stringify(dish)}
    </div>
    <div title = "summary">
        Dinner for <span title="nr. guests">
            {guests} 
        </span> guests 
    </div>
</div>;