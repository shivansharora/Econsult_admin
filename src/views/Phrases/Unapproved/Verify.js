import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import validate from '../../../layouts/Dashboard/components/NavBar/Validation';
import useForm from '../../../customHooks/useForm'
import TextField from '@material-ui/core/TextField';
import Button from '../../../components/CustomButtons/Button'
import { green, red } from '@material-ui/core/colors';
import {
    Dialog,
    Grid,
    Typography,
    Radio
} from '@material-ui/core';

import Slide from '@material-ui/core/Slide';



const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Radio color="default"  {...props} />);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles(theme => ({
    root: {
        // width: 600
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

const VerifyModal = props => {
    const { open, onClose, className, ...rest } = props;
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const remark = () => {
        return (
            <Grid item xs={12} sm={12} md={12} >
                <TextField
                    id="note"
                    name="note"
                    label="Remark"
                    multiline
                    rows={4}
                    // value={values.note || ''}
                    // onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />

            </Grid>
        )
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
                        Verify
                      </Typography>

                </div>
                <div className={classes.content}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} >
                            <form noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <label style={{ marginTop: 8 }}>Reject</label>
                                        <RedRadio
                                            checked={selectedValue === 'Reject'}
                                            onChange={handleChange}
                                            value="Reject"
                                            name="reject"
                                            inputProps={{ 'aria-label': 'A' }}
                                        />
                                        <label style={{ marginTop: 8 }}>Accept</label>
                                        <GreenRadio
                                            checked={selectedValue === 'accept'}
                                            onChange={handleChange}
                                            value="accept"
                                            name="accept"
                                            inputProps={{ 'aria-label': 'C' }}
                                        />
                                    </Grid>
                                    {selectedValue === 'Reject'
                                        ? remark() : null
                                    }



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

VerifyModal.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default VerifyModal;
