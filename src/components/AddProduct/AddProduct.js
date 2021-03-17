import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            status: "1",
        };
    }

    isChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // this.setState({
        //     [name]: value
        // });

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    sendData = (obj) => {
        axios
            .post(
                "https://6049d5affb5dcc001796a9a7.mockapi.io/api/products",
                obj
            )
            .then((res) => {
                if (!res || !res.data) {
                    return;
                }
                let products = [...this.props.products];
                products.push(res.data);
                this.props.addProduct(products);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="app">
                <div className="product">
                    <form className="product__form">
                        <div className="product__form-container">
                            <label className="product__form-label">
                                Tên sản phẩm
                            </label>
                            <input
                                type="text"
                                onChange={(e) => this.isChange(e)}
                                name="name"
                                className="product__form-input"
                                placeholder=""
                            />
                        </div>
                        <div className="product__form-container">
                            <label className="product__form-label">Giá</label>
                            <input
                                type="number"
                                onChange={(e) => this.isChange(e)}
                                name="price"
                                className="product__form-input"
                                placeholder=""
                            />
                        </div>

                        <select
                            className="select"
                            name="status"
                            onChange={(e) => this.isChange(e)}
                        >
                            <option value="1">Còn hàng</option>
                            <option value="0">Hết hàng</option>
                        </select>

                        <NavLink
                            to="/products"
                            type="reset"
                            onClick={() => this.sendData(this.state)}
                            className="btn btn--save"
                        >
                            Lưu
                        </NavLink>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (item) => {
            dispatch({
                type: "ADD_DATA",
                item: item,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
