import React from 'react';
import PropTypes from 'prop-types';
import {Bookrow}  from "./bookrow";
export const Favorites = ({data, highlight, visibility}) => {

	if (visibility) {
		return(
			<section id="favorites"
							 aria-label="List of books added to favorites">
				{data.map((entry, i) =>
					<Bookrow key = {i}
					         rowNumber = {i}
					         title = {entry.title}
					         author = {entry.authors}
					         rating = {entry.rating}
					         highlight = {highlight}
					/>
				)}
			</section>
		)
	} else {
		return null;
	}
}

Favorites.propTypes = {
	data: PropTypes.array
}