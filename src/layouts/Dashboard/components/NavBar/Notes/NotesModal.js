import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import validate from '../Validation';
import useForm from '../../../../../customHooks/useForm'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../../../../components/CustomButtons/Button'

import {
    Dialog,
    Grid,
    Typography,
} from '@material-ui/core';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles(theme => ({
    root: {
        width: 600
    },
    header: {
        maxWidth: 600,
        margin: '0 auto',
        padding: 12
    },
    content: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        maxWidth: 720,
        margin: '0 auto'
    },

}));

const NotesModal = props => {
    const { open, onClose, className, ...rest } = props;

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(notes, validate);

    function notes() {
        const formData = {
            user_type: values.user_type,
            user: values.user,
            start_datetime: values.start_datetime,
            note: values.note
        }
        console.log(formData);
    }


    const classes = useStyles();

    return (
        <Dialog
            onClose={onClose}
            TransitionComponent={Transition}
            open={open}
        >
            <div
                {...rest}
                className={clsx(classes.root, className)}
            >
                <div className={classes.header}>
                    <Typography
                        align="center"
                        gutterBottom
                        variant="h3"
                    >
                        Admin Notes
                      </Typography>

                </div>
                <div className={classes.content}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} >
                            <form onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <TextField style={{ minWidth: 270 }}
                                            id="user_type"
                                            select
                                            name="user_type"
                                            label="User Type"
                                            value={values.user_type || ''}
                                            onChange={handleChange}

                                        >
                                            <MenuItem value={10}>Doctor</MenuItem>
                                            <MenuItem value={20}>MSO</MenuItem>
                                            <MenuItem value={30}>Nurse</MenuItem>
                                            <MenuItem value={30}>Tellecaller</MenuItem>

                                        </TextField>
                                        {errors.user_type && (
                                            <p className="help is-danger">{errors.user_type}</p>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <TextField style={{ minWidth: 250 }}
                                            id="user"
                                            select
                                            name="user"
                                            label="Select"
                                            value={values.user || ''}
                                            onChange={handleChange}

                                        >
                                            <MenuItem value={10}>Arun Kumar</MenuItem>
                                            <MenuItem value={20}>Pawan Singh</MenuItem>
                                            <MenuItem value={30}>Rahul Sharma</MenuItem>
                                        </TextField>
                                        {errors.user && (
                                            <p className="help is-danger">{errors.user}</p>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <TextField
                                            id="start_datetime"
                                            label="Start Date"
                                            type="date"
                                            name="start_datetime"
                                            value={values.start_datetime || ''} onChange={handleChange}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                        />
                                        {errors.start_datetime && (
                                            <p className="help is-danger">{errors.start_datetime}</p>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <TextField
                                            id="end_datetime"
                                            label="End Date"
                                            type="date"
                                            name="end_datetime"
                                            disabled
                                            value={values.end_datetime || ''}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,

                                            }}
                                        />
                                        {/* {errors.name && (
                                         <p className="help is-danger">{errors.name}</p>
                                          )} */}
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <TextField
                                            id="note"
                                            name="note"
                                            label="Note"
                                            multiline
                                            rows={4}
                                            value={values.note || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                        />
                                        {errors.note && (
                                            <p className="help is-danger">{errors.note}</p>
                                        )}
                                    </Grid>
                                    <Button type="submit">Submit</Button>
                                    <Button
                                        onClick={onClose}
                                    >Cancel</Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Dialog>
    );
};

NotesModal.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default NotesModal;
