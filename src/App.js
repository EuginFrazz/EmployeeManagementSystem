import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import Form from './component/employeedataform/Form';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





function App() {
  return (
<Router>
  <Route exact path ="/" component ={Dashboard}/>
  <Route exact path ="/form" component ={Form} />

</Router>
 
    

  );
}

export default App;
