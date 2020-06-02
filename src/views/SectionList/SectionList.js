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

const SectionList = () => {
    const classes = useStyles();
    const [sections, setsections] = useState([]);




    useEffect(() => {
        let mounted = true;

        const fetchPhrases = () => {
            axios.get('/api/sectionlist').then(response => {
                if (mounted) {
                    setsections(response.data.sections);
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
                            to="/create_section"
                        >
                            <PersonAddIcon className={classes.filterIcon} /> New Section
                        </Button><br /><br />
                        <Result
                            sections={sections}
                        />

                    </div>
                </Grid>

            </Grid>

        </div>
    );
};

export default SectionList;
