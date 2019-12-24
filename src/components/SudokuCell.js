import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display a single sudoku cell
 * 
 * @property number value
 * @property bool valid
 * @property function onChange
 */
const SudokuCell = ({ value, valid, onChange }) => (
    <input
        style={{ 
            width: "1.8em",
            paddingLeft: "0.2em", 
            height: "1.4em", 
            textAlign: "center", 
            fontSize: "1.3em", 
            color: ((valid)? "rgba(0, 0, 0, 0.54)" :"red"), 
            
        }}
        type="number"
        min="0"
        max="9"
        maxLength="1"
        value={String(value)}
        onChange={event => onChange(event.target.value)}
    />
);

/**
 * Prop types validation
 */
SudokuCell.propTypes = {
    value: PropTypes.number.isRequired,
    valid: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SudokuCell;