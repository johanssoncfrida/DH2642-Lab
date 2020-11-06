function readModel(){
    const modelString = localStorage.getItem("dinnerModel");
    let modelObject = JSON.parse(modelString) ?? {}; //om det finns ett icke null/undefined element, välj vänster om (??)
                                                    // annars gö ett tomt objekt höger om (??)
    let model = new DinnerModel(modelObject.guests, 
        modelObject.dishes, modelObject.currentDish);
    
    model.addObserver(()=> localStorage.setItem("dinnerModel", 
    JSON.stringify({
        guests: model.getNumberOfGuests(),
        dishes: model.getMenu(),
        currentDish: model.currentDish
    }))
    );
    return model;
}
   

