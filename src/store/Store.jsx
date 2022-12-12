import React, { useEffect, useState } from 'react';
import { Cart } from './Cart/Cart';
import { data } from './data';
import { Header } from './header/Header';
import { Product } from './product/Product';
import cl from './storage.module.css';

const Store = () => {
	const [items, setItems] = useState([...data])
	const [storageVisible, setStorageVisible] = useState(false);
	const [newItems, setNewItems] = useState([]);
	const [total, setTotal] = useState({
		price: newItems.reduce((prev, curr) => prev + curr.price, 0)
	});
	const [option, setOption] = useState('');
	const handleChange = (e) => {
		setOption(e.target.value);
	}
	useEffect(() => {
		setTotal({
			price: newItems.reduce((prev, curr) => prev + curr.price, 0)
		})
	}, [newItems])
	return (
		<div className='container'>
			<Header
				newItems={newItems}
				setStorageVisible={setStorageVisible}
				storageVisible={storageVisible}
			/>

			<div className={cl.storage}>
				<Product
					option={option}
					items={items}
					newItems={newItems}
					setNewItems={setNewItems}
					handleChange={handleChange}
				/>

				{
					storageVisible && (
						<Cart
							setStorageVisible={setStorageVisible}
							total={total}
							newItems={newItems}
							setNewItems={setNewItems}
						/>
					)
				}

			</div>
		</div>
	)
}

export default Store;
