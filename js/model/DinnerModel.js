class DinnerModel{
    
    constructor(){
        this.numberOfGuests = 2;
        this.subscribers = [];
    }
    setNumberOfGuests(x){
        if(x <= 0)
            throw "Number of dinner guests cannot be zero or negative";
        this.numberOfGuests = x;

        this.notifyObserver();
   }
   getNumberOfGuests(){
       return this.numberOfGuests; 
   }

   addObserver(callback){
       this.subscribers = this.subscribers.concat(callback);
       
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
  
}
    
    

