
const App = ({model}) => 
<div className ="flexParent">
<div className = "sidebar debug"><Sidebar model ={model}/></div>
<div className = "mainContent debug"><Summary model = {model}/></div> 
</div>;
//const App = ({model}) => <Sidebar model={model} />