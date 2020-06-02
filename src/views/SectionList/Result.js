import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Paper,
    colors,
    Link
} from '@material-ui/core';


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
        width: 35,
        height: 33,
        // marginLeft:-11
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
    const { className, sections, ...rest } = props;

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>Section</TableCell>
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>Section title</TableCell>
                                <TableCell style={{ backgroundColor: '#373131', color: 'white' }}>Status</TableCell>
                                <TableCell align="right" style={{ backgroundColor: '#373131', color: 'white' }}>Actions</TableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {sections.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(role => (
                                <StyledTableRow
                                    hover
                                    key={role.id}
                                >
                                    <TableCell>{role.section}</TableCell>
                                    <TableCell>
                                        {role.section_title}
                                    </TableCell>
                                    <TableCell style={{ color: statusColors[role.status] }}>{role.status}</TableCell>
                                    <TableCell align="right">

                                        <Link
                                            color="inherit"
                                            component={RouterLink}
                                            to={`/edit_section/${role.id}`}
                                            variant="h6"
                                        >
                                            <Tooltip title="Edit" aria-label="Edit">
                                                <Fab className={classes.fab}>

                                                    <EditIcon
                                                    />
                                                </Fab>
                                            </Tooltip>
                                        </Link>

                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={sections.length}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Paper>
        </React.Fragment>

    );
};

Results.propTypes = {
    className: PropTypes.string,
    phrases: PropTypes.array.isRequired
};

Results.defaultProps = {
    phrases: []
};

export default Results;


