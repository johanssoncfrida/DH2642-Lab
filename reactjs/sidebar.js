
function Sidebar(){
    const [guestNum,setGuestNumber]=React.useState(model.numberOfGuests);
    React.useEffect(function(){ 
        model.addObserver(()=>setGuestNumber(model.getNumberOfGuests())); 
 }, [model]); 
    return h(SidebarView, {
        guests:guestNum,
        setGuests: n=>model.setNumberOfGuests(n)
    });
}


