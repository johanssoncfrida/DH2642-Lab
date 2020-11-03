
function Summary({model}){
    const guests = useModelProp(model, "numberOfGuests")
    return h(SummaryView, {guests});
}