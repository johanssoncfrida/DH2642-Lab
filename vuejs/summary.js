const Summary= {
    functional:true,
    render(h, context){
        const {model, ...props}=context.props;
        return SummaryView({ 
            h,
            guests: model.getNumberOfGuests(), 
            dishes: model.getMenu(),
            ingredients:(model.getIngredientList()),
            
            ...props,});   // spread other props (i.e. nav) 
                 // to send them unchanged to the view
        }
    }
    
