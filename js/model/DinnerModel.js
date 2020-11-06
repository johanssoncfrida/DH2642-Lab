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
       let remove = () => this.removeObserver(obs);
       remove();
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
        this.subscribers= this.subscribers.filter(o=>obs); 
        
    }
    addToMenu(dish){
        this.dishes.forEach(d=>{if(d.id === dish.id) 
            throw Error("Dish already added")});
        this.dishes = [dish, ...this.dishes];
    }

    removeFromMenu(dish){
        this.dishes =this.dishes.filter(d => d.id !== dish.id);
        
    }

}
    
    

