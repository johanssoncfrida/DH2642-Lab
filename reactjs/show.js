function Show({hash, children}){  
    const [route, setRoute]= React.useState(window.location.hash);
    React.useEffect(()=> 
      window.addEventListener("hashchange", 
                 ()=> setRoute({})), 
 []); 
    return hash===window.location.hash?children: false;
 } 