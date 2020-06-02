import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAdd';

import axios from '../../utils/axios';
import Result from './Result';

import { Link as RouterLink } from 'react-router-dom';


const styles = theme => ({
    root: {
        padding: '8px',
        padding: 12

    },
    results: {
        marginTop: theme.spacing(2)
    },
    paginate: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center'
    }
});
const useStyles = makeStyles(styles);

const RoleList = () => {
    const classes = useStyles();
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        let mounted = true;

        const fetchPhrases = () => {
            axios.get('/api/rolelist').then(response => {
                if (mounted) {
                    setRoles(response.data.roles);
                    //   console.log(response.data.phrases)
                }
            });
        };

        fetchPhrases();

        return () => {
            mounted = false;
        };
    }, []);



    return (
        <div className={classes.root}  >
            <Grid >
                <Grid item xs={12} sm={12} md={12} >
                    <div className={classes.results}>
                        <Button
                            className={classes.filterButton}
                            style={{ float: 'right' }}
                            color="primary"
                            size="small"
                            variant="outlined"
                            component={RouterLink}
                            to="/create_role"
                        >
                            <PersonAddIcon className={classes.filterIcon} /> New Role
                        </Button><br /><br />
                        <Result
                            roles={roles}
                        />

                    </div>
                </Grid>

            </Grid>

        </div>
    );
};

export default RoleList;
