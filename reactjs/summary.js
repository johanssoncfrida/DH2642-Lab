
function Summary({model}){
    const guests = useModelProp(model, "numberOfGuests")
    const dishes = useModelProp(model, "dishes")
    return h(SummaryView, {guests, dishes});
}