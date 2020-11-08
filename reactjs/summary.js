
function Summary({model}){
    const guests = useModelProp(model, "numberOfGuests")
    const dishes = useModelProp(model, "dishes")
    return h(SummaryView, {
        guests, 
        dishes,
        ingredients:(model.getIngredientList()), compareIngredients});
}

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