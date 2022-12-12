import React from 'react';
import { ItemCart } from '../ItemCart/ItemCart';
import cl from './Cart.module.css';
import { SlBasket } from 'react-icons/sl';
import { Skeleton } from './Skeleton/Skeleton';
export const Cart = ({ setStorageVisible, newItems, setNewItems, total }) => {
	const handleClick = () => {
		alert(`Ви купили товар на ${total.price}$!`);
		setNewItems([]);
		setStorageVisible(false);
	}
	return (
		<div className={cl.basket}>
			<span className={cl.title}>Your basket</span>
			<div className={cl.items}>
				{newItems.map((itemS) => (
					<ItemCart
						setNewItems={setNewItems}
						key={itemS.id}
						item={itemS}
						newItems={newItems}
					/>
				))}
			</div>
			{total.price > 1 &&
				(<div className={cl.cart_bottom}>
					<h3 className={cl.all_price}> Total price: <span>{total.price} $</span></h3>
					<button onClick={handleClick} className={cl.btn}>
						<SlBasket size={22} />
						<span>Buy Now</span>
					</button>
				</div>
				)
			}
			{
				newItems.length === 0 && (
					<Skeleton />
				)
			}

		</div>
	)
}
