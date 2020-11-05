const DetailsView=({dish, guests})=>
<div class = "detailsView">  
    <div>
        {JSON.stringify(dish)}
    </div>
    
    <div>
        For <span title="nr. guests">
            {guests} 
        </span> guests: <span>
            {dish.pricePerServing * guests}
        </span>
    </div>
</div>;