
function Sidebar({model}){
    const guests=useModelProp(model, "numberOfGuests")
    return h(SidebarView, {
        guests,
        setGuests: n=>model.setNumberOfGuests(n)
    });
}