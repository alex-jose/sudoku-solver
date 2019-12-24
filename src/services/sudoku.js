/**
 * Checks if a 2d array is a valid 9x9 sudoku grid
 * 
 * @param number[9][9] cells - 9x9 sudoku grid 
 * @returns bool - true if cells is valid
 */
function validate(cells) {
    // verify 2d array sizes
    if (cells.length !== 9)
        return false;
    for (let i in cells) {
        let row = cells[i];
        if (row.length !== 9)
            return null;
    }
    
    // Check if each cell is valid and not duplicate
    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            if (!isValid(cells, i, j))
                return false;
    
    return true;
}

/**
 * Check if all the cells in a 2d array are filled
 * 
 * @param number[9][9] cells - 9x9 sudoku grid
 * @returns bool - true if all cells are filled
 */
function isFilled(cells) {
    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            if (cells[i][j] === "0") return false;

    return true;
}


/**
 * Get an unfilled cell from the sudoku grid
 * 
 * @param number[9][9] cells - 9x9 sudoku grid
 * @returns [nnumber, number] - array indices of the next unfilled cell
 */
function getUnFilledCell(cells) {
    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            if (cells[i][j] === "0") 
                return [i, j];

    return null;
}

/**
 * Get possible values for a cell in sudoku grid
 * 
 * @param number[][] cells - 9x9 sudoku grid
 * @param number row
 * @param number column 
 * @requires number[] - list of possible values
 */
function getPossibleValues(cells, row, column) {
    // find values already used in row, column or box
    let usedValues = new Set([]);
    for (let i = 0; i < 9; i++) {
        usedValues.add(cells[i][column]);
        usedValues.add(cells[row][i]);
    }
    for (let i = Math.floor(row / 3 ) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
        for (let j =Math.floor(column / 3) * 3; j < Math.floor(column / 3) * 3 + 3; j++) {
            usedValues.add(cells[i][j])
        }
    }

    // find unused values
    let possibleValues = [];
    for (let i=0; i<10;i++) {
        if (!usedValues.has(String(i))) possibleValues.push(String(i));
    }

    return possibleValues;
}

/**
 * Recursively solves a sudoku grid
 * 
 * @param number[][] cells - 9x9 sudoku grid
 * @returns number[][] - solved 9x9 sudoku grid or null
 */
function solveUtil(cells) {
    // if the cells are filled completely stop.
    if (isFilled(cells)) 
        return cells;

    // Find the next unfilled cell and possible values
    let [i, j] = getUnFilledCell(cells);
    let possibleValues = getPossibleValues(cells, i, j);
    
    // if there are no possible values then the sudoku cant be solved
    if (possibleValues.length === 0) 
        return null;
    
    // try to solve the remaining cells for each of the possible values
    for (let x in possibleValues) {
        let newCells = cells.map((row, rowi) => (
            row.map((cell, coli) => (
                (rowi === i && coli === j)? possibleValues[x]: cell
            ))
        ));

        let solution = solveUtil(newCells);
        
        // if solved then return the soultion
        if (solution !== null)
            return solution;
    }

    return null;
}

/**
 * Checks if the value in a cell is valid
 * 
 * @param number[][] cells - 9x9 sudoku grid 
 * @param number row 
 * @param number column 
 * @returns bool - true if the value in the cell is valid
 */
export function isValid (cells, row, column) {    
    // unfilled cells are treated as valid
    if (cells[row][column] === "0") 
        return true;

    // Check for duplicate in row and column
    for (let i = 0; i < 9; i++) {
        if (i !== row && cells[i][column] === cells[row][column]) return false;
        if (i !== column && cells[row][i] === cells[row][column]) return false;
    }

    // Check for duplicate in 3x3 grid
    for (let i = Math.floor(row / 3 ) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
        for (let j =Math.floor(column / 3) * 3; j < Math.floor(column / 3) * 3 + 3; j++) {
            if (i === row || j === column) continue;
            if (cells[i][j] === cells[row][column]) return false;
        }
    }

    return true;
}

/**
 * Utility function to solve a sudoku
 * 
 * @param number[][] cells - 9x9 sudoku grid 
 * @return number[][] - solved sudoku or null if unable to solve
 */
export function solve(cells) {
    if (!validate(cells)) 
        return null;

    return solveUtil(cells);
}