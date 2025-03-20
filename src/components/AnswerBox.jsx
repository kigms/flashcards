import React, { Component, useEffect, useStates} from 'react';

const AnswerBox = ({handleChange, label, currentVal}) => {
	return (
		<div className="answer-box-container">
			<input
				type="text"
				name={label}
				value={currentVal}
				placeholder="Guess the answer..."
				onChange={handleChange}
				className="textbox"
			/>
		</div>
	);
}

export default AnswerBox;