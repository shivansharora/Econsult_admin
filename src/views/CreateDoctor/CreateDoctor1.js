import React, { useState,useCallback,Fragment } from "react";
// @material-ui/core components
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
// import { makeStyles, } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins



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
import maritalStatus from './maritalStatus';
import Gender from './gender';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { useDropzone } from 'react-dropzone';
import { green } from '@material-ui/core/colors';

import PerfectScrollbar from 'react-perfect-scrollbar';
import {
	// Button,
	// IconButton,
	// Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Checkbox,
	colors,
	FormControlLabel
  } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
// import Upload from './Upload';

import bytesToSize from '../../utils/bytesToSize';

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
	  },
	  files:{
		  marginRight:52
	  }
});


const GreenCheckbox = withStyles({
	root: {
	  color: green[400],
	  '&$checked': {
		color: green[600],
	  },
	},
	checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(styles);
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const CreateDoctor = (props) => {
	const classes = useStyles();
	const [schoolfiles, setSchoolFiles] = useState([]);
	const [degreefiles, setDegreeFiles] = useState([]);
	const [idfiles, setIdFiles] = useState([]);


	// const handleDrop = useCallback(acceptedFiles => {
	//   setFiles(files => [...files].concat(acceptedFiles));
	// }, []);
	
  
	// const handleRemoveAll = () => {
	//   setFiles([]);
	// };
	
  
	// const { getRootProps, getInputProps, isDragActive } = useDropzone({
	//   onDrop: handleDrop
	// });

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
			medical_registration_no: values.medical_registration_no,
			category: values.category,
			fee: values.fee,
			designation: values.designation,
			college_name: values.college_name,
			// files:files
			schoolfiles:schoolfiles,
			degreefiles:degreefiles,
			idfiles:idfiles
		}
		  console.log(formData);
		//   Router.History.goBack();
		// props.history.goBack()
	}

   const SchoolCertificate = () =>{
	   return(
		<FilePond 
		files={schoolfiles}
		allowMultiple={true}
		onupdatefiles={setSchoolFiles}
		labelIdle='Please Choose'
		className={classes.files}			 
	 />
	   )
   }

   const DegreeCertificate = () =>{
	return(
	 <FilePond 
	 files={degreefiles}
	 allowMultiple={true}
	 onupdatefiles={setDegreeFiles}
	 labelIdle='Please Choose'
	 className={classes.files}			 
  />
	)
}

const IdCertificate = () =>{
	return(
	 <FilePond 
	 files={idfiles}
	 allowMultiple={true}
	 onupdatefiles={setIdFiles}
	 labelIdle='Please Choose'
	 className={classes.files}			 
  />
	)
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
							<h4 className={classes.cardTitleWhite}>Create Doctor</h4>
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
									<Grid item xs={12} sm={3} md={3} >
										<TextField
											className={`input ${errors.dob && 'is-danger'}`}
											id="dob"
											label="DOB"
											type="date"
											name="dob"
											value={values.dob || ''} onChange={handleChange}
											className={classes.textField}
											InputLabelProps={{
												shrink: true
											}}
										/>
										{errors.dob && (
											<p className="help is-danger">{errors.dob}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={3} md={3} >
										<CustomInput
											className={`input ${errors.age && 'is-danger'}`}
											required
											id="age"
											name="age"
											label="Age"
											value={values.age || ''}
											changed={handleChange}
											fullWidth

										/>
										{errors.age && (
											<p className="help is-danger">{errors.age}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={3} md={3}>
										<TextField className={classes.formControl}
											//    className={`input ${errors.maritalstatus && 'is-danger'}`}
											id="marital_status"
											name="marital_status"
											select
											label="Marital Status"
											value={values.marital_status || ''}
											onChange={handleChange}
										>
											{maritalStatus.map(option => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
										{errors.marital_status && (
											<p className="help is-danger">{errors.marital_status}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={3} md={3}>
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
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 204 }}
											id="category"
											select
											name="category"
											label="Category"
											value={values.default_language || ''}
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
										<TextField style={{ minWidth: 204 }}
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
                                    <Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="designation"
											name="designation"
											label="Designation"
											value={values.designation || ''}
											changed={handleChange}
										/>
										{errors.designation && (
											<p className="help is-danger">{errors.designation}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.confirm_password && 'is-danger'}`}
											required
											id="college_name"
											name="college_name"
											label="College Name"
											value={values.college_name || ''}
											changed={handleChange}
										/>
										{errors.college_name && (
											<p className="help is-danger">{errors.college_name}</p>
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
									{/* <Grid item xs={12} sm={12} md={12} >

									<div
									className={clsx({
									[classes.dropZone]: true,
									[classes.dragActive]: isDragActive
									})}
									{...getRootProps()}
								>
									<input {...getInputProps()} />
									<div>
									<img
										alt="Select file"
										className={classes.image}
										src="/images/undraw_add_file2_gvbb.svg"
									/>
									</div>
									<div>
									<Typography
										gutterBottom
										variant="h3"
									>
										Select Documents
									</Typography>
									</div>
								</div>
								{files.length > 0 && (
								<Fragment>
								<PerfectScrollbar options={{ suppressScrollX: true }}>
									<List className={classes.list}>
									{files.map((file, i) => (
										<ListItem
										divider={i < files.length - 1}
										key={uuid()}
										>
										<ListItemIcon>
											<FileCopyIcon />
										</ListItemIcon>
										<ListItemText
											primary={file.name}
											primaryTypographyProps={{ variant: 'h5' }}
											secondary={bytesToSize(file.size)}
										/>
									
										</ListItem>
									))}
									</List>
                                    <Button
                                onClick={handleRemoveAll}
                                size="small"
                                >
                                Remove all
                                </Button>
								</PerfectScrollbar>
                              
								</Fragment>
								)}
								</Grid> */}
								<br /><br />
								<Grid item xs={12} sm={12} md={12} >
									<label style={{ fontSize:15,fontWeight:600 }}>Upload Documents :</label>
								</Grid>
								 <Grid item xs={12} sm={4} md={4} >
								<FormControlLabel
									control={<GreenCheckbox
									checked={values.school || false}
									style={{ marginLeft: '-6px' }}
									color="primary"
									name="school"
									onChange={handleChange}
									/>}
									label="10th/12th certificate"
								/>
								{values.school === true ?
                    			SchoolCertificate() : null}
								</Grid>

								<Grid item xs={12} sm={4} md={4} >
								<FormControlLabel
									control={<GreenCheckbox
									checked={values.degree || false}
									style={{ marginLeft: '-6px' }}
									color="primary"
									name="degree"
									onChange={handleChange}
									/>}
									label="Degree"
								/>
								{values.degree === true ?
                    			DegreeCertificate() : null}
								</Grid>
								<Grid item xs={12} sm={4} md={4} >
								<FormControlLabel
									control={<GreenCheckbox
									checked={values.id || false}
									style={{ marginLeft: '-6px' }}
									color="primary"
									name="id"
									onChange={handleChange}
									/>}
									label="ID's"
								/>
								{values.id === true ?
                    			IdCertificate() : null}
								</Grid>
								{/* <Grid item xs={12} sm={6} md={6} >
                              
								</Grid> */}

								</Grid>
								<CardFooter style={{ float: 'right' }}>
									<Button type="submit">Create</Button>
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

export default CreateDoctor;