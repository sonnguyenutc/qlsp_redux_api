import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <ul className="header__list">
                        <li className="header__item"><NavLink activeClassName = "show" to = '/home'>Trang chủ</NavLink></li>
                        <li className="header__item"><NavLink activeClassName = "show" to = '/products'>Quản lý sản phẩm  </NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;