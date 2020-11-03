function useModelProp(model, prop) {
    const [propValue, setPropValue]= React.useState(model[prop]);
    React.useEffect(function(){ 
       const obs= ()=>setPropValue(model[prop]);
        model.addObserver(obs);
    }, [model, prop]); 
    return propValue;
}
