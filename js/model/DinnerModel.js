class DinnerModel{
    
    constructor(guests=2,dishes=[],currentDish=null){
        this.subscribers = [];
        this.numberOfGuests = guests;
        this.currentDish = currentDish;
        this.dishes=dishes;
    }

    setDishes(dishes){
        this.dishes = dishes;
    }
    setNumberOfGuests(x){
        if(x <= 0)
            throw "Number of dinner guests cannot be zero or negative";
        this.numberOfGuests = x;
        this.notifyObserver();
   }
   setCurrentDish(id){
       this.currentDish = id;
       this.notifyObserver();
   }
   
   getNumberOfGuests(){
       return this.numberOfGuests; 
   }

   getMenu(){
    return [...this.dishes];
    }

   addObserver(obs){
       this.subscribers = this.subscribers.concat(obs);
       
   }

    notifyObserver(){
        this.subscribers.forEach(callback => {
            try{ callback(); 
            }catch(err){
                console.error("Error ", err, callback);
            }
        })
    }
    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o=> o != obs); 
        
    }
    addToMenu(dish){
        this.dishes.forEach(d=>{if(d.id === dish.id) 
            throw Error("Dish already added")});
        this.dishes = [dish, ...this.dishes];
        this.notifyObserver();
    }

    removeFromMenu(dish){
        this.dishes =this.dishes.filter(d => d.id !== dish.id);
        this.notifyObserver();
    }
    getIngredientList()
    {
        if (this.dishes == [])
            return [];
        let temp = (this.dishes.map(dish => dish.extendedIngredients)).flat();
        temp = temp.map(ingredient => ingredient = {id:ingredient.id, ingredientName:ingredient.name
            , amount:{amount:ingredient.measures.metric.amount, unitLong:ingredient.measures.metric.unitLong, unitShort:ingredient.measures.metric.unitShort}
            , aisle:ingredient.aisle});
        let result = [];

        temp.forEach(ingredient => {
            ingredient.amount.amount = (ingredient.amount.amount * this.numberOfGuests).toFixed(2);
            let index = 0;
            let wasFound = 0;
            while (index < result.length && !wasFound) {
                if (ingredient.id == result[index].id)
                {
                    result[index].amount.amount += ingredient.amount.amount;
                    wasFound = 1;
                    return;
                }
                index++;
            }
            if(!wasFound)
            {
                result = result.concat(ingredient);
            }
        })

        return result;
    }
   

}
    
    

