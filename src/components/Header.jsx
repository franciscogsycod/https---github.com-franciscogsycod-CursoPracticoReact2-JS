import React from 'react';
import '@styles/Header.scss';

import Menu from '@components/Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';


const Header = () => {

	const { state } = React.useContext(AppContext);

	const [toggleOrders, setToggleOrders] = React.useState(false);

	const [toggle, setToggle] = React.useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleToggleOrders = () => {
		setToggleOrders(!toggleOrders);
	};

	return (
		<nav>
			<img src={icon_menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo_yard_sale} alt="logo" className="logo-nav" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={handleToggleOrders}>
						<img src={icon_shopping_cart} alt="shopping cart" />
						{
							(state.cart.length > 0 ? <div>{state.cart.length}</div> : null)
						}
					</li>
				</ul>
			</div>
			{
				toggle && <Menu/>
			}
			{
				toggleOrders && <MyOrder/>
			}
		</nav>
	);
}

export default Header;
