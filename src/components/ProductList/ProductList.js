import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <NavLink to = "addProducts" className="btn btn--add">Thêm sản phẩm</NavLink>
                <div className="container-table">
                    <div className="container-table__title">
                        <h3 className="container-table__title-text">Danh sách sản phẩm</h3>
                    </div>
                    <ProductItem></ProductItem>
                </div>
            </div>
        );
    }
}

export default ProductList;