import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product.id,
            name: this.props.product.name,
            price: this.props.product.price,
            status: this.props.product.status,
        };
    }
    // Bắt sự thay đổi dữ liệu khi sửa
    isChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    pushNewProduct = () => {
        let objProduct = {};
        objProduct.id = this.state.id;
        objProduct.name = this.state.name;
        objProduct.price = this.state.price;
        objProduct.status = this.state.status;

        axios
            .put(
                `https://6049d5affb5dcc001796a9a7.mockapi.io/api/products/${objProduct.id}`,
                {
                    name: objProduct.name,
                    price: objProduct.price,
                    status: objProduct.status,
                }
            )
            .then((res) => {
                if (!res || !res.data || !res.data.id) {
                    return;
                }
                let arrProduct = [...this.props.products];
                let findProduct = arrProduct.find((item) => item.id === res.data.id);
                if (!findProduct) {
                    return;
                }
                arrProduct.splice(arrProduct.indexOf(findProduct), 1, res.data);
                this.props.dataEditSuccess(arrProduct);
            })
            .catch((err) => {
                console.log(err);
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
                                defaultValue={this.props.product.name}
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
                                defaultValue={this.props.product.price}
                                name="price"
                                className="product__form-input"
                                placeholder=""
                            />
                        </div>

                        <select
                            className="select"
                            name="status"
                            defaultValue={this.props.product.status}
                            onChange={(e) => this.isChange(e)}
                        >
                            <option value="1">Còn hàng</option>
                            <option value="0">Hết hàng</option>
                        </select>

                        <NavLink
                            to="/products"
                            type="reset"
                            onClick={() => this.pushNewProduct()}
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
const mapStateToProps = (state, ownProps) => {
    return {
        product: state.editProduct,
        products: state.products,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dataEditSuccess: (item) => {
            dispatch({
                type: "EDIT_DATA",
                item: item,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
