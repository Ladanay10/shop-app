import React from 'react';
import cl from './searchItem.module.css';

export const SearchItem = ({ option, handleChange }) => {
	return (
		<>
			<select className={cl.select} onChange={handleChange} name="select" value={option}>
				<option value='ALL' >SELECT</option>
				<option value="Mouse">MOUSE</option>
				<option value="Keyboard">KEYBOARD</option>
				<option value="Headphones">HEADPHONES</option>
			</select>
		</>
	)
}
