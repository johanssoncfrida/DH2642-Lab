
function Sidebar({model, nav,dishChoice}){
    const guests = useModelProp(model, "numberOfGuests")
    const dishes = useModelProp(model, "dishes")
    const[navCallback,navLabel] = nav;
    return h(SidebarView, {
        guests,
        setGuests: n=>model.setNumberOfGuests(n),
        dishes,
        removeDish: dish=> {model.removeFromMenu(dish)},
        dishChosen: dishId=> {
            model.setCurrentDish(dishId);
            dishChoice();
        },
        navCallback:navCallback,
        navLabel:navLabel
    });
    
}

