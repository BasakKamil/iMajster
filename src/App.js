import React, { useState, useEffect } from 'react';
import './App.css';
import ThreeBack from './Components/Animate/ThreeBack';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Shop from './Components/NavInside/Shop';
import Createproject from './Components/Project/Createproject';
import SignIn from './Components/Autoryzacja/SignIn';
import ProjectDetails from './Components/Project/ProjectDetails';
import Contact from './Components/NavInside/Contact';
import About from './Components/NavInside/About';
import UserForm from './Components/Auth/UserForm/UserForm';
import Ordersum from './store/shop/Ordersum';
import Loader from '../src/Components/Animate/Loader';
import Navbar from './Components/Layaut/Navbar';

const routes = [
  {path: '/shop', name: "Shop", Component: Shop },
  {path: '/contact', name: "Contact", Component: Contact },
  {path: '/about', name: "About", Component: About },
  
]

const App = () => {

  const [load,setload] = useState(false);

    useEffect(() => {
        window.onload = () => {
            setload(true);    
        } 
    }, [])
  if(load) {
    return <Loader/>
  }
  return (
    <React.Fragment>
    <Router>
      <div className="App">
        <Navbar/>
               <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/project/:id" component={ProjectDetails}/>
                  <Route path="/createproject" component={Createproject}/>
                  <Route path="/signin" component={SignIn}/>
                  <Route path="/signup" component={UserForm}/>
                  <Route path="/ordersum" component={Ordersum}/>
                  {routes.map(({path,Component})=>{
                  return <Route key="name" path={path} exact>
                            <div className="page">
                              <Component/>
                            </div>
                        </Route>
                   })}   
                </Switch>
          
      </div>  
    </Router>
    <ThreeBack/>
   </React.Fragment>
  )
}

export default App;
