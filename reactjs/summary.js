
function Summary({model, nav}){
    const guests = useModelProp(model, "numberOfGuests")
    const dishes = useModelProp(model, "dishes")
    return h(SummaryView, {
        guests, 
        dishes,
        ingredients:(model.getIngredientList()), 
        nav: nav},
         );
}

