import React from 'react';
import cl from './Skeleton.module.css';
import { GiBuyCard } from 'react-icons/gi';

export const Skeleton = () => {
	return (
		<div className={cl.skeleton}>
			<span>You haven't products!</span>
			<p>Select the products, which you want to buy</p>
			<GiBuyCard size={30} />
		</div>
	)
}
