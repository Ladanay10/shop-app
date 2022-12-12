import React from 'react';
import cl from './ItemCart.module.css';
import { TbTrashOff } from 'react-icons/tb';

export const ItemCart = ({ item, setNewItems, newItems }) => {

	const handleDelete = () => {
		setNewItems(newItems.filter(value => value.id !== item.id));
	}

	return (
		<div className={cl.itemCard}>

			<div className={cl.itemCardInfo}>
				<img src={item.image} alt="image" />
				<div className={cl.itemText}>
					<h3 className={cl.name}>{item.name}</h3>
					<h4 className={cl.model}>{item.model}</h4>
					<div>
						<span className={cl.price}>Price: {item.price} $</span>
					</div>
				</div>
			</div>
			<div className={cl.btn}>
				<TbTrashOff size={25} onClick={handleDelete} />
			</div>
		</div>
	)
}
