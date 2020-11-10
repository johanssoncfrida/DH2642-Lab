function Show({hash, children}){  
    const [route, setRoute]= React.useState(window.location.hash);
    React.useEffect(()=> 
      window.addEventListener("hashchange", 
                 ()=> setRoute({})), 
 []); 
    ()=>window.removeEventListener("hashChange", route);
    return hash===window.location.hash?children: false;
 } 