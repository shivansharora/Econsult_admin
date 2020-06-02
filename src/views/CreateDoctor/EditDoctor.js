import React, { useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// core components
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import { Link as RouterLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import useForm from '../../customHooks/useForm';
import validate from './Validation'
// import maritalStatus from './maritalStatus';
import Gender from './gender';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';
// import { useDropzone } from 'react-dropzone';
import {

	colors
  } from '@material-ui/core';


const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '17px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "600",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	},
	formControl: {

		minWidth: 150,
	},
	dropZone: {
		border: `1px dashed ${theme.palette.divider}`,
		padding: theme.spacing(6),
		outline: 'none',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		alignItems: 'center',
		'&:hover': {
		  backgroundColor: colors.grey[50],
		  opacity: 0.5,
		  cursor: 'pointer'
		}
	  },
	  dragActive: {
		backgroundColor: colors.grey[50],
		opacity: 0.5
	  },
	  image: {
		width: 130
	  },
	  info: {
		marginTop: theme.spacing(1)
	  },
	  list: {
		maxHeight: 320
	  },
	  actions: {
		marginTop: theme.spacing(2),
		display: 'flex',
		justifyContent: 'flex-end',
		'& > * + *': {
		  marginLeft: theme.spacing(2)
		}
	  }
});

const useStyles = makeStyles(styles);

const EditDoctor = (props) => {
	const classes = useStyles();


	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(create, validate);

	function create() {
	}
	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={8} md={8} >
					<Card style={{ marginTop: '24px' }}>
						<CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
							<CardIcon color="success">
								<PersonAddIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Edit Doctor</h4>
						</CardHeader>
						<CardBody>
						<form onSubmit={handleSubmit} noValidate>
								<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={12} >
										<CustomInput
											className={`input ${errors.name && 'is-danger'}`}
											required
											inputProps={{
												autoFocus: true
											}}
											id="name"
											name="name"
											label="Full Name"
											value={values.name || ''}
											changed={handleChange}

										/>
										{errors.name && (
											<p className="help is-danger">{errors.name}</p>
										)}

									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<CustomInput
											required
											id="mobile"
											name="mobile"
											label="Mobile"
											value={values.mobile || ''}
											changed={handleChange}

										/>
										{errors.mobile && (
											<p className="help is-danger">{errors.mobile}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<CustomInput
											required
											id="email"
											name="email"
											label="Email"
											value={values.email || ''}
											changed={handleChange}

										/>
										{errors.email && (
											<p className="help is-danger">{errors.email}</p>
										)}
									</Grid>

									<Grid item xs={12} sm={4} md={4}>
										<TextField style={{ minWidth: 220 }}
											id="gender"
											select
											label="Gender"
											name="gender"
											value={values.gender || ''}
											onChange={handleChange}
										>
											{Gender.map(option => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}

										</TextField>
										{errors.gender && (
											<p className="help is-danger">{errors.gender}</p>
										)}
									</Grid>
									
									<Grid item xs={12} sm={12} md={12} >
										<CustomInput
											className={`input ${errors.address && 'is-danger'}`}
											required
											id="address"
											name="address"
											label="Address"
											autoComplete="address"
											value={values.address || ''}
											changed={handleChange}
										/>
										{errors.address && (
											<p className="help is-danger">{errors.address}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 200 }}
											id="state_id"
											select
											name="state_id"
											label="State"
											value={values.state_id || ''}
											onChange={handleChange}

										>
											<MenuItem value={10}>Delhi</MenuItem>
											<MenuItem value={20}>Lucknow</MenuItem>
											<MenuItem value={30}>Others</MenuItem>
											))}
										</TextField>
										{errors.state_id && (
											<p className="help is-danger">{errors.state_id}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 200 }}
											id="city_id"
											select
											name="city_id"
											label="City"
											value={values.city_id || ''}
											onChange={handleChange}

										>
											<MenuItem value={10}>Basti</MenuItem>
											<MenuItem value={20}>Barabanki</MenuItem>
											<MenuItem value={30}>Others</MenuItem>

										</TextField>
										{errors.city_id && (
											<p className="help is-danger">{errors.city_id}</p>
										)}
									</Grid>
									
									<Grid item xs={12} sm={4} md={4} >
										<CustomInput
											required
											id="pincode"
											name="pincode"
											label="Pincode"
											value={values.pincode || ''}
											changed={handleChange}
										/>
										{errors.pincode && (
											<p className="help is-danger">{errors.pincode}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="medical_registration_no "
											name="medical_registration_no"
											label="Medical Registration No"
											value={values.medical_registration_no || ''}
											changed={handleChange}
										/>
										{errors.medical_registration_no && (
											<p className="help is-danger">{errors.medical_registration_no}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="experience "
											name="experience"
											label="Experience"
											value={values.experience || ''}
											changed={handleChange}
										/>
										{errors.experience && (
											<p className="help is-danger">{errors.experience}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 220 }}
											id="category"
											select
											name="category"
											label="Category"
											value={values.category || ''}
											onChange={handleChange}

										>
											<MenuItem value={10}>Category 1</MenuItem>
											<MenuItem value={20}>Category 2</MenuItem>
											<MenuItem value={20}>Category 3</MenuItem>
											<MenuItem value={20}>Category 4</MenuItem>
										</TextField>
										{errors.category && (
											<p className="help is-danger">{errors.category}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 220 }}
											id="fee"
											select
											name="fee"
											label="Fee"
											value={values.fee || ''}
											onChange={handleChange}

										>
											<MenuItem value={10}>Rs. 200</MenuItem>
											<MenuItem value={20}>Rs. 300</MenuItem>
											<MenuItem value={20}>Rs. 400</MenuItem>
											<MenuItem value={20}>Rs. 500</MenuItem>
										</TextField>
										{errors.fee && (
											<p className="help is-danger">{errors.fee}</p>
										)}
									</Grid>
                                    <Grid item xs={12} sm={4} md={4}>
										<TextField style={{ minWidth: 220 }}
											id="default_language"
											select
											label="Default Language"
											name="default_language"
											value={values.default_language || ''}
											onChange={handleChange}
										>
											<MenuItem value='hindi'>Hindi</MenuItem>
											<MenuItem value='english'>English</MenuItem>

										</TextField>
										{errors.default_language && (
											<p className="help is-danger">{errors.default_language}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.password && 'is-danger'}`}
											required
											id="password"
											name="password"
											label="Password"
											value={values.password || ''}
											changed={handleChange}
										/>
										{errors.password && (
											<p className="help is-danger">{errors.password}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.confirm_password && 'is-danger'}`}
											required
											id="confirm_password"
											name="confirm_password"
											label="Confirm Password"
											value={values.confirm_password || ''}
											changed={handleChange}
										/>
										{errors.confirm_password && (
											<p className="help is-danger">{errors.confirm_password}</p>
										)}
									</Grid>
								</Grid>
								<CardFooter style={{ float: 'right' }}>
									<Button type="submit">Save</Button>
									<Button
										component={RouterLink}
										to="/doctor_list"
									>Cancel</Button>
								</CardFooter>
							</form>
						</CardBody>
					</Card>

				</Grid>
			</Grid>
		</div>
	);
}

export default EditDoctor;