const Details={
    props:["model", "ok", "cancel"],
    data(){
       return {
         promise: null,
         data:null, 
         error:null 	
        };
      },
      watch:{
          'model.currentDish': {
             immediate:true,
             handler(){
                this.promise=this.model.currentDish && DishSource.getDishDetails(this.model.currentDish), [model.currentDish];
                this.data=null;   
                this.error=null;
                // if we have a promise, we subscribe to it;
                    if(this.promise)this.promise.then(dt=>this.data=dt).catch(this.error);
             }
          }
      },
      render(h){ 
        const[addNav, addLabel] = this.ok;
         return promiseNoData(this.promise,this.data,this.error, h) ||
                DetailsView(
                    {h, 
                    dish: this.data, 
                    guests:this.model.getNumberOfGuests(), 
                    dishAdded: currentDish => {
                        this.model.addToMenu(currentDish);
                        addNav();
                    },
                    addLabel: addLabel,
                    isDishInMenu: this.model.dishes.find(d => d.id == this.data.id),
                    cancel: this.cancel});
      } 
  };
  