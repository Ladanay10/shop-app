import React from 'react';
import cl from './item.module.css';
import { AiFillPlusCircle } from 'react-icons/ai'
const Item = ({ item, newItems, setNewItems }) => {
	const handleClick = () => {
		setNewItems([...newItems, { id: Math.random(36 % 2), image: item.image, name: item.name, price: item.price, model: item.model }]);

	}
	return (
		<div className={cl.item}>
			<img src={item.image} alt="image" />
			<div className={cl.itemInfo}>
				<h4 className={cl.model} >{item.model}</h4>
				<h2 className={cl.name}>{item.name}</h2>
				<span className={cl.price}>Price: {item.price} $</span>
				<div className={cl.btn} onClick={handleClick}>
					<AiFillPlusCircle size={22} />
					<span>Add to Cart</span>
				</div>
			</div>
		</div>
	)
}

export default Item
