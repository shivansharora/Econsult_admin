import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";
import {
    TableContainer,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Paper,
    colors,
    Tooltip
} from '@material-ui/core';


import PricingModal from '../Unapproved/Verify'


const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
                color: "black",
                backgroundColor: "#84b786",
            }
        }
    }
});



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    fab: {
        margin: 2,
        backgroundColor: '#66a668',
        width: 45,
        height: 42
    },
}));



const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },

    },
}))(TableRow);

const Results = props => {
    const { className, filteredUnPhrases } = props;

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [pricingModalOpen, setPricingModalOpen] = React.useState(false);

    const handlePricingOpen = () => {
        setPricingModalOpen(true);
    };

    const handlePricingClose = () => {
        setPricingModalOpen(false);
    };

    const handleChangePage = (event, page) => {
        setPage(page);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
    };

    const statusColors = {
        'Inactive': colors.orange[600],
        Active: colors.green[600]
    };

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <StyledTableRow >
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>Phrase Category</TableCell>
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>English Phrase</TableCell>
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>Hindi Phrase</TableCell>
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>English Description</TableCell>
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>Hindi Description</TableCell>
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>Status</TableCell>
                                <TableCell align="right" style={{ backgroundColor: '#373131', color: 'white' }}>Actions</TableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {filteredUnPhrases.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(phrase => (
                                <StyledTableRow
                                    hover
                                    key={phrase.id}
                                >
                                    <TableCell>{phrase.phrase_category}</TableCell>
                                    <TableCell>
                                        {phrase.english_phrase}
                                    </TableCell>
                                    <TableCell>{phrase.hindi_phrase}</TableCell>
                                    <TableCell>
                                        <MuiThemeProvider theme={theme}>
                                            <Tooltip title={phrase.english_description} classes={{ tooltip: classes.customWidth }}>
                                                <Fab className={classes.fab}>
                                                    <VisibilityIcon />
                                                </Fab>
                                            </Tooltip>
                                        </MuiThemeProvider>
                                    </TableCell>
                                    <TableCell>
                                        <MuiThemeProvider theme={theme}>
                                            <Tooltip title={phrase.hindi_description} classes={{ tooltip: classes.customWidth }}>
                                                <Fab className={classes.fab}>
                                                    <VisibilityIcon />
                                                </Fab>
                                            </Tooltip>
                                        </MuiThemeProvider>
                                    </TableCell>
                                    <TableCell style={{ color: statusColors[phrase.status] }}>{phrase.status}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            color="primary"
                                            onClick={handlePricingOpen}
                                            size="small"

                                            variant="outlined"
                                        >
                                            Verify
                                      </Button>
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={filteredUnPhrases.length}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Paper>
            <PricingModal
                onClose={handlePricingClose}
                open={pricingModalOpen}
            />
        </React.Fragment>

    );
};

Results.propTypes = {
    className: PropTypes.string,
    unphrases: PropTypes.array.isRequired
};

Results.defaultProps = {
    unphrases: []
};

export default Results;


