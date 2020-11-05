function Details({model}){ 
    const [promise, setPromise]= React.useState(null);
    const guests = useModelProp(model, "numberOfGuests")

    React.useEffect(
          ()=>setPromise(DishSource.getDishDetails(547775)), []
    );

    const [data, error]= usePromise(promise);
    return promiseNoData(promise, data, error) 
        || h(DetailsView, {dish:data, guests:guests});   
}
