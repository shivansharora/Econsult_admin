import React, { useState } from "react";
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
import CardAvatar from '../../components/Card/CardAvatar';
import avatar from "../../assets/img/patient.png";
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import useForm from '../../customHooks/useForm';
import validate from './Validation'
import maritalStatus from './maritalStatus';
import Gender from './gender';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';



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
	}
});

const useStyles = makeStyles(styles);

const EditMso = (props) => {
	const classes = useStyles();

	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(create, validate);

	function create() {
		const formData = {
			name: values.name,
			mobile: values.mobile,
			email: values.email,
			dob: values.dob,
			age: values.age,
			marital_status: values.marital_status,
			gender: values.gender,
			address: values.address,
			city_id: values.city_id,
			state_id: values.state_id,
			pincode: values.pincode,
			store_code: values.store_code,
			mode: values.mode,
			default_language: values.default_language,
			password: values.password,
			confirm_password: values.confirm_password
		}
		//   console.log(formData);
		//   Router.History.goBack();
		props.history.goBack()
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
							<h4 className={classes.cardTitleWhite}>Edit MSO</h4>
						</CardHeader>
						<CardBody>
						<form onSubmit={handleSubmit} noValidate>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={12} >
										<CardAvatar profile style={{ float: 'right' }}>
											<a href="#pablo" onClick={e => e.preventDefault()}>
												<img src={avatar} alt="..." />
											</a>
										</CardAvatar>
									</Grid>
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
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.mobile && 'is-danger'}`}
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
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.email && 'is-danger'}`}
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
										<CustomInput
											className={`input ${errors.pincode && 'is-danger'}`}
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
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 204 }}
											id="default_language"
											select
											name="default_language"
											label="Default Language"
											value={values.default_language || ''}
											onChange={handleChange}

										>
											<MenuItem value='hindi'>Hindi</MenuItem>
											<MenuItem value='english'>English</MenuItem>
											))}
										</TextField>
										{errors.default_language && (
											<p className="help is-danger">{errors.default_language}</p>
										)}
									</Grid>
									
									<Grid item xs={12} sm={4} md={4}>
										<TextField className={classes.formControl}
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
										to="/mso_list"
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

export default EditMso;