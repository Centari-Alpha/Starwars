import React from 'react';
import { planetIMGs } from '../planetIMGs.js'

const Card = ({ name, climate, population, }) => {
	return(
		<div className='bg-black dib br3 pa3 ma2 w-30 grow shadow-6'>
			<img alt='planet' src={planetIMGs[0].src}/>
			<div className='tc color: red'>
			 	<h2>Name: {name}</h2>
			 	<h3>Climate: {climate}</h3>
			 	<p>Population: {population}</p>
			</div>
		</div>
		);
}

export default Card;