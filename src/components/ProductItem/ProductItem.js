import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.getData = this.getData.bind(this);
    }
    // Lấy tất cả product từ server
    componentDidMount() {
        this.getData();
    }
    // lấy dữ liệu về
    getData = () => {
        axios
            .get("https://6049d5affb5dcc001796a9a7.mockapi.io/api/products")
            .then((res) => {
                this.props.setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // Hiển thị trạng thái
    handleStatus = (item) => {
        if (item.status === "1") {
            return "Còn hàng";
        } else {
            return "Hết hàng";
        }
    };
    // Xóa 1 product trên server
    handleDel = (item) => {
        if (!item && !item.id) {
            return;
        }
        axios
            .delete(
                `https://6049d5affb5dcc001796a9a7.mockapi.io/api/products/${item.id}`
            )
            .then((res) => {
                if (res.status === 200) {
                    //Xóa thành công
                    let obj = this.props.products.filter((i) => i.id !== item.id);
                    this.props.setProducts(obj);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    // Sửa product
    handleEdit = (item) => {
        this.props.getProductItem(item);
    };

    render() {
        return (
            <table className="container-table__table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <span className="container-table__table-price">
                                        {this.handleStatus(item)}
                                    </span>
                                </td>
                                <td>
                                    <NavLink
                                        to="/editProducts/"
                                        className="btn btn--edit"
                                        onClick={() => this.handleEdit(item)}
                                    >
                                        Sửa
                                    </NavLink>
                                    <button
                                        className="btn btn--del"
                                        onClick={() => this.handleDel(item)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setProducts: (item) => {
            dispatch({
                type: "GET_DATA",
                item: item,
            });
        },
        getProductItem: (item) => {
            dispatch({
                type: "SEND_DATA_EDIT",
                item: item,
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
