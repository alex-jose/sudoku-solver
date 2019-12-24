import React from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 * Show a dialog box if ther is any error
 * 
 * @property string - error message to display or null 
 */
const SudokuError = ({ error, onClose }) => (
    <Dialog 
        open={error.trim() !== ""} 
        onClose={onClose}
    >
        <DialogContent>
            {error}
        </DialogContent>
        <DialogActions>
            <Button 
                color="primary" 
                autoFocus 
                onClick={onClose}
            > 
                OK
            </Button>
        </DialogActions>
    </Dialog>
);

/**
 * Proptypes validations
 */
SudokuError.propTypes = {
    error: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default SudokuError;