const SummaryView = ({guests, dishes}) =>
<div title = "summary">
     Dinner for <span title="nr. guests">
          {guests}
          
     </span> guests 
     <div>{
        dishes.map(dish =>
            <div key = {dish.id}>
                {dish.title}
                </div>)}
         
     </div>
</div>;