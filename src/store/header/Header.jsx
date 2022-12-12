import React from 'react';
import cl from './header.module.css';
import { BsBasket2 } from 'react-icons/bs';
import logo from '../../assets/logo.svg';
export const Header = ({ newItems, setStorageVisible, storageVisible }) => {
	return (
		<header className={cl.header}>
			<div className={cl.logo}>
				<img src={logo} alt="" />
			</div>
			<div className={cl.nav}>
					<BsBasket2 size={33} onClick={() => setStorageVisible(!storageVisible)} />
					<div className={cl.number}>
						<span>{newItems.length}</span>
					</div>
			</div>
		</header>
	)
}
