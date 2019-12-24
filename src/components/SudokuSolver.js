import React from 'react';
import SudokuGrid from './SudokuGrid';
import SudokuError from './SudokuError';
import { solve } from '../services/sudoku';
import { Button, Grid, Box, Typography, Container, Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * Sudoku solver 
 */
class SudokuSolver extends React.Component {
    constructor() {
        super();

        this.state = { 
            cells: [...Array(9)].map(_ => [...Array(9)].map(_ => 0)),
            error: "",
            loading: false
        };
        
        this.solve = this.solve.bind(this);
        this.clear = this.clear.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    /**
     * Validates and change a cell value
     * 
     * @param number newValue 
     * @param number rowIndex 
     * @param number columnIndex 
     */
    handleChange(newValue, rowIndex, columnIndex) {
        // if multiple keys are pressed take the last character
        if (newValue.length !== 1)
            newValue = newValue.slice(newValue.length - 1);

        // if new value is invalid, set value to zero
        if (newValue === '' || newValue > 9 || newValue < 0)
            newValue = 0;
        
        newValue = Number(newValue);

        // update new value in state
        this.setState(prevState => ({
            cells: prevState.cells.map((row, i) => (
                row.map((cell, j) => (
                    (rowIndex === i && columnIndex === j)?
                        newValue: 
                        cell
                ))
            ))
        }));
    }

    /**
     * Solve the sudoku
     */
    solve() {
        this.setState({ loading: true });
        let solution = solve(this.state.cells);
        if (solution === null)
            return this.setState({ error: 'Unable to solve!', loading: false });
        else
            return this.setState({ cells: solution, error: "", loading: false });
    }

    /**
     * Reset the sudoku grid values to zero
     */
    clear() {
        this.setState({
            cells: [...Array(9)].map(_ => [...Array(9)].map(_ => 0)),
            error: "",
        });
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Grid container spacing={1} direction="column" justify="center">
                    <Grid item xs style={{ marginTop: "2em" }}>
                        <Box>
                            <Typography variant="h2" align="center" style={{ color: "black" }}> 
                                SUDOKU
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs style={{ marginTop: "1em" }}>
                        <Box>
                            <Typography align="center" color="textSecondary"> 
                                Fill the known cells and let the app solve the rest for you :)
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs container justify="center" style={{ marginTop: "3em" }}>
                        <SudokuGrid 
                            cells={this.state.cells} 
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs container justify="center" style={{ marginBottom: "3em" }}>
                        <Button 
                            mx={2} 
                            size="small" 
                            variant="outlined" 
                            color="default" 
                            onClick={this.solve} 
                            style={{ marginRight: "0.5em"}}
                        > 
                            Solve 
                        </Button>
                        <Button 
                            mx={2} 
                            size="small" 
                            variant="outlined"  
                            onClick={this.clear} 
                            style={{ marginLeft: "0.5em"}}
                        >
                            Clear
                        </Button>
                    </Grid>
                </Grid>
                <SudokuError 
                    error={this.state.error} 
                    onClose={() => this.setState({ error: "" })} 
                />
                <Backdrop open={this.state.loading} style={{ zIndex: "1000" }}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Container>
        );
    }
}

export default SudokuSolver;