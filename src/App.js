import React,{ useEffect, useState}  from 'react';
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
import Navbar from './Components/Layaut/Navbar';
import Admin from './Components/Admin/Admin';
import "@stripe/stripe-js";
import AdminDash from './Components/Admin/AdminDash';
import AdminDelete from './Components/Admin/AdminDelete';
import Loader from './Components/Animate/Loader';



const routes = [
  {path: '/shop', name: "Shop", Component: Shop },
  {path: '/contact', name: "Contact", Component: Contact },
  {path: '/about', name: "About", Component: About },
  {path: '/adminadd', name: "Admin Add", Component: Admin },
  {path: '/admindelete', name: "Admin Delete", Component: AdminDelete },
]

const App = () => {


const [ Load, setLoad ] = useState(false);

useEffect(()=>{
  setTimeout(()=>{
    setLoad(true)
  },5000)
},[])

  return (
    <React.Fragment>
    <Router>
      { Load ? 
      <div className="App">
        <Navbar/>
               <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/project/:id" component={ProjectDetails}/>
                  <Route path="/createproject" component={Createproject}/>
                  <Route path="/signin" component={SignIn}/>
                  <Route path="/admin" component={AdminDash}/>
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
      :
      <Loader/>  
      }
    </Router>
    <ThreeBack/>
   </React.Fragment>
  )
}

export default App;
