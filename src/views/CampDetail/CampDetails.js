import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

import Card from '../../components/Card/Card';

import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';

import { Page } from 'components';

import avatar from "../../assets/img/patient.png";
import styles from "../../assets/jss/material-dashboard-react/views/DoctorBio";

const useStyles = makeStyles(styles);

const CampDetail = () => {
	const classes = useStyles();
	return (
		<Page
			style={{ padding: 16 }}

		>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={9} md={9} >
					<Card style={{ marginLeft: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }} >
						<CardHeader style={{ width: '147px', padding: '14px' }} color="success" >

							<h4 className={classes.cardTitleWhite}>Camp Detail</h4>
						</CardHeader>
						<CardBody>
							<form >
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Camp Type</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Pathology Camp
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Camp Location</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Lucknow
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Camp Description</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Camp For Heart Patient
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Doctors</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												<ul>
													<li>Arvind Sharma</li>
													<li>Pawan Kumar</li>
												</ul>
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">MSO</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Kamal Singh
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Promo Code Title</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Heart Camp
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Discount Type</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Percentage
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Discount</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												25 %
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Start Date</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												12/06/2020
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">End Date</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												12/06/2020
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={12} md={12} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Note</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Feel Free to Join
											</Typography>

										</div>
									</Grid>
								</Grid>
							</form>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
		</Page>
	);
};

export default CampDetail;
