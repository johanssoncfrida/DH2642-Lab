const Search={
    props: ["model","nav", "resultChoice"],
    data(){
        return { 
           promise: DishSource.searchDishes({}), 
           data:null, 
           error:null, 
           text: "", 
           type: "", 
         };
 
    },
    created(){
	  this.promise.then(dt=>this.data = dt)
                    .catch(this.error);
    },
    render(h) { return h("div", {},
           [
               SearchFormView({
                    h,
                    onText: x=> this.text = x,
                    onType: x=> this.type = x,
                    onSearch: ()=> {this.promise = DishSource.searchDishes({type:this.type, query:this.text}).then(dt => this.data = dt).
                    catch(this.error);
                    this.data = null;
                    this.error = null;},
                    nav: this.nav
                })
               ,
                promiseNoData(this.promise, this.data, this.error, h) || 
                   SearchResultsView( {
                       h,
                       searchResults: this.data,
                        dishChosen: dishId=> {
                            this.model.setCurrentDish(dishId);
                            this.resultChoice();
                            
                        }

                    })
           ]);
        }
    }
        