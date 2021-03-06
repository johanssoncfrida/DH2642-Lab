function Details({model, ok:[addNav,addLabel],cancel}){ 
    const [promise, setPromise]= React.useState(null);
    const guests = useModelProp(model, "numberOfGuests");
    const currentDish = useModelProp(model, "currentDish");
    const menu = useModelProp(model, "dishes");

    React.useEffect(
          ()=>setPromise(currentDish&&DishSource.getDishDetails(currentDish)), [currentDish]
    );

    const [data, error]= usePromise(promise);
    
    return promiseNoData(promise, data, error) 
        || h(DetailsView, {
            dish:data, 
            guests:guests, 
            dishAdded: currentDish => {
                model.addToMenu(currentDish)
                addNav()
            },
            addLabel,
            isDishInMenu: menu.find(d => d.id == data.id),
            cancel: cancel
        });   
}
