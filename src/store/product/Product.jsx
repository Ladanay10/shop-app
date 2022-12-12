import React from 'react';
import Item from '../Item/Item';
import cl from './product.module.css';
import { SearchItem } from './SearchItem/SearchItem';

export const Product = ({ handleChange, option, items, newItems, setNewItems }) => {
	const arr = () => {
		if (option === '' || option === 'ALL') {
			return items;
		} else {
			return items.filter((value) => value.name === option)
		}
	}
	return (
		<div className={cl.container}>
			<div className={cl.top}>
				<h2 className={cl.title}>Product</h2>
				<SearchItem
					option={option}
					handleChange={handleChange}
				/>
			</div>
			<div className={cl.products}>

				{
					arr().map((item) => (
						<Item
							newItems={newItems}
							setNewItems={setNewItems}
							key={item.id}
							item={item}
						/>
					))
				}
			</div>
		</div>

	)
}
