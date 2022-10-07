import React from 'react'
import { Route} from 'react-router';
import './App.css';
import Layout from './Component/NavBar/Layout/JS/Layout';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Home from './Pages/Home';
import Project from './Pages/Projects';
// import { Route, Switch } from 'react-router'
// import Home from './pages/Home';
// import AddProduct from './pages/AddProduct';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import Orders from './pages/Orders';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Reset from './pages/Reset';
// import UpdatePass from './pages/UpdatePass';
// import MyProducts from './pages/MyProducts';
// import Error500 from './pages/Error500';

const App = () => {
   
    return (
        <Layout>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/edu" exact>
                <Education/>
            </Route>
            <Route path="/pro" exact>
                <Project/>
            </Route>
            <Route path="/cont" exact>
                <Contact/>
            </Route>
        </Layout>
        // <Layout>
        //     <Switch>
        //         <Route path="/" exact>
        //             <Home/>
        //         </Route>
        //         <Route path="/AddProduct" exact>
        //             <AddProduct/>
        //         </Route>
        //         <Route path="/Product/:prodId" exact>
        //             <ProductDetails/>
        //         </Route>
        //         <Route path="/cart" exact>
        //             <Cart/>
        //         </Route>
        //         <Route path="/order" exact>
        //             <Orders/>
        //         </Route>
        //         <Route path="/login" exact>
        //             <Login/>
        //         </Route>
        //         <Route path="/signup" exact>
        //             <SignUp/>
        //         </Route>
        //         <Route path="/reset" exact>
        //             <Reset/>
        //         </Route>
        //         <Route path="/reset:token" exact>
        //             <UpdatePass/>
        //         </Route>
        //         <Route path="/myProducts" exact>
        //             <MyProducts/>
        //         </Route>
        //         <Route path="/error500" exact>
        //             <Error500/>
        //         </Route>
        //     </Switch>
        // </Layout>
    )
}

export default App
