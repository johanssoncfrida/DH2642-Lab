const Show={
    props:["hash"],
    data(){ return {counter:1}},
    mounted(){
        this.listener= e=> this.counter= this.counter+1;
        window.addEventListener("hashchange", this.listener);
    },
    render(h){
        this.counter;  // mention to force re-render!
        return this.hash===window.location.hash? this.$slots.default : false; 
    }
};

