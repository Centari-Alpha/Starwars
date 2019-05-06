import React from 'react';
import Card from  './Card';

const CardList = ({ planets }) => {
	const cardComponent = planets.map((planet, i) => {
		return <Card key={i} 
		name={planets[i].name} 
		climate={planets[i].climate} 
		population={planets[i].population}/>
	})
	return (
		<div>
			{cardComponent}
		</div>
	  );
}

export default CardList;