const Sidebar= {
    props: ["model", "nav" ,"dishChoice"],
    render(h){    
        const  {model, nav, dishChoice} = this;   
        const[navCallback,navLabel] = nav;
        return SidebarView({
            h,
            guests: model.getNumberOfGuests(),
            dishes: model.getMenu(),
            setGuests: x=> model.setNumberOfGuests(x), 
            removeDish: dish=> {model.removeFromMenu(dish)},
            dishChosen: dishId=> {
            model.setCurrentDish(dishId);
            dishChoice();
            },
            navCallback:navCallback,
            navLabel:navLabel
          });
     }
}
