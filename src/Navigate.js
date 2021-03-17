import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList';
import Home from './components/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';


class Navigate extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* <Route path="/">
                        <Home></Home>
                    </Route> */}
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/products">
                        <ProductList></ProductList>
                    </Route>
                    <Route path="/addProducts">
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path="/editProducts">
                        <EditProduct></EditProduct>
                    </Route>

                </Switch>
            </div>
        );
    }
}

export default Navigate;