
function Sidebar({model}){
    const guests = useModelProp(model, "numberOfGuests")
    const dishes = useModelProp(model, "dishes")
    return h(SidebarView, {
        guests,
        setGuests: n=>model.setNumberOfGuests(n),
        dishes,
        removeDish: dish=> {model.removeFromMenu(dish)},
        dishType: dishType,
        compareDishes: compareDishes
    });
    
}
const types=["starter", "main course", "dessert"];
function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
	    return tp[0];
    return "";
}
function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    if(ai < bi)
        return -1;
    else if(ai > bi)
        return 1;
    else(ai === bi)
        return 0;
}
