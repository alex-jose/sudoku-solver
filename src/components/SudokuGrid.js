import React from 'react';
import SudokuCell from './SudokuCell';
import { isValid, isSolved } from '../services/sudoku';
import PropTypes from 'prop-types';

/**
 * Display the sudoku grid
 * 
 * @property number[][] cells - 9x9 sudoku grid
 */
const SudokuGrid = ({ cells, onChange }) => {
    const borderStyle = { border: ((isSolved(cells))? "1px solid limegreen": "1px solid black") };

    return (
        <table style={{ ...borderStyle }}>
            <tbody>{cells.map((row, rowIndex) => (
                <tr style={{ ...borderStyle }} key={rowIndex}>{row.map((cell, columnIndex) => (
                    <td style={{ ...borderStyle }} key={columnIndex}>
                        <SudokuCell 
                            value={cell} 
                            onChange={newValue => onChange(newValue, rowIndex, columnIndex)} 
                            valid={isValid(cells, rowIndex, columnIndex)}
                        />
                    </td>
                ))}</tr>
            ))}</tbody>
        </table>
    );
};

/**
 * Prop types validation
 */
SudokuGrid.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SudokuGrid;