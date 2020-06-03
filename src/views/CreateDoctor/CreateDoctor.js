import React, { useState } from "react";
// @material-ui/core components
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// core components
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import avatar from "../../assets/img/patient.png";
import CardAvatar from '../../components/Card/CardAvatar';

import { Link as RouterLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import useForm from '../../customHooks/useForm';
import validate from './Validation'
// import maritalStatus from './maritalStatus';
import Gender from './gender';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';
import { green } from '@material-ui/core/colors';
import {

	Checkbox,
	colors,
	FormControlLabel
} from '@material-ui/core';
import Upload from '../../components/Upload/Upload';

const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

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

const useStyles = makeStyles(styles);

const CreateDoctor = (props) => {
	const classes = useStyles();
	const [tenthfiles, setTenthFiles] = useState([]);
	const [twelfthfiles, setTwelfthFiles] = useState([]);
	const [graduationfiles, setGraduationFiles] = useState([]);
	const [masterfiles, setMasterFiles] = useState([]);
	const [aadharCard, setAadharCard] = useState([]);
	const [penCard, setPenCard] = useState([]);
	const uploadedImage = React.useRef(null);
	const imageUploader = React.useRef(null);

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
			gender: values.gender,
			address: values.address,
			city_id: values.city_id,
			state_id: values.state_id,
			pincode: values.pincode,
			medical_registration_no: values.medical_registration_no,
			category: values.category,
			fee: values.fee,
			default_language: values.default_language,
			
		}
		  console.log(formData);
		//   Router.History.goBack();
		// props.history.goBack()
	}

	const handleImageUpload = e => {
		const [file] = e.target.files;
		if (file) {
			const reader = new FileReader();
			const { current } = uploadedImage;
			current.file = file;
			reader.onload = e => {
				current.src = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	};

	const TenthCertificate = () => {
		return (
			<Upload
				files={tenthfiles}
				allowMultiple={true}
				onupdatefiles={setTenthFiles}
				labelIdle='Please Choose'
				className={classes.files}
			/>
		)
	}

	const TwelfthCertificate = () => {
		return (
			<Upload
				files={twelfthfiles}
				allowMultiple={true}
				onupdatefiles={setTwelfthFiles}
				labelIdle='Please Choose'
				className={classes.files}
			/>
		)
	}

	const GraduationCertificate = () => {
		return (
			<React.Fragment>
				{/* <Grid item xs={12} sm={2} md={2} >
	<CustomInput
		required
		id="graduation_college"
		name="graduation_college"
		label="Colllege Name"
		value={values.graduation_college || ''}
		changed={handleChange}

	/>
	</Grid> */}
				{/* <Grid item xs={12} sm={2} md={2} > */}
				<Upload
					files={graduationfiles}
					allowMultiple={true}
					onupdatefiles={setGraduationFiles}
					labelIdle='Please Choose'
					className={classes.files}
				/>
				{/* </Grid> */}
			</React.Fragment>
		)
	}

	const MasterCertificate = () => {
		return (
			<Upload
				files={masterfiles}
				allowMultiple={true}
				onupdatefiles={setMasterFiles}
				labelIdle='Please Choose'
				className={classes.files}
			/>
		)
	}

	const AadharCard = () => {
		return (
			<Upload
				files={aadharCard}
				allowMultiple={true}
				onupdatefiles={setAadharCard}
				labelIdle='Please Choose'
				className={classes.files}
			/>
		)
	}

	const PenCard = () => {
		return (
			<Upload
				files={penCard}
				allowMultiple={true}
				onupdatefiles={setPenCard}
				labelIdle='Please Choose'
				className={classes.files}
			/>
		)
	}
	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit} noValidate>
				<Grid container spacing={1}>

					<Grid item xs={12} sm={8} md={8} >
						<Card style={{ marginTop: '28px' }}>
							<CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
								<CardIcon color="success">
									<PersonAddIcon />
								</CardIcon>
								<h4 className={classes.cardTitleWhite}>Create Doctor</h4>
							</CardHeader>
						
							<CardBody>
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

									<br /><br />
									<Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
										<label style={{ fontSize: 17, fontWeight: 600 }}>Upload Documents :</label>
									</Grid>
									<Grid item xs={12} sm={12} md={12} >
										<label style={{ fontSize: 15, fontWeight: 600 }}>*Select Certificates to Upload :</label>
									</Grid>
									<Grid item xs={12} sm={2} md={2} >
										<FormControlLabel
											control={<GreenCheckbox
												checked={values.tenth || false}
												style={{ marginLeft: '-6px' }}
												color="primary"
												name="tenth"
												onChange={handleChange}
											/>}
											label="10th"
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{values.tenth === true ?
											TenthCertificate() : null}
									</Grid>
									<Grid item xs={12} sm={2} md={2} >
										<FormControlLabel
											control={<GreenCheckbox
												checked={values.twelfth || false}
												style={{ marginLeft: '-6px' }}
												color="primary"
												name="twelfth"
												onChange={handleChange}
											/>}
											label="12th"
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{values.twelfth === true ?
											TwelfthCertificate() : null}
									</Grid>
									<Grid item xs={12} sm={2} md={2} >
										<FormControlLabel
											control={<GreenCheckbox
												checked={values.graduation || false}
												style={{ marginLeft: '-6px' }}
												color="primary"
												name="graduation"
												onChange={handleChange}
											/>}
											label="Graduation Degree"
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{values.graduation === true ?
											GraduationCertificate() : null}
									</Grid>
									<Grid item xs={12} sm={2} md={2} >
										<FormControlLabel
											control={<GreenCheckbox
												checked={values.master || false}
												style={{ marginLeft: '-6px' }}
												color="primary"
												name="master"
												onChange={handleChange}
											/>}
											label="Master Degree"
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{values.master === true ?
											MasterCertificate() : null}
									</Grid>
									<Grid item xs={12} sm={12} md={12} >
										<label style={{ fontSize: 15, fontWeight: 600 }}>*Select ID's to Upload :</label>
									</Grid>
									<Grid item xs={12} sm={2} md={2} >
										<FormControlLabel
											control={<GreenCheckbox
												checked={values.aadhar_card || false}
												style={{ marginLeft: '-6px' }}
												color="primary"
												name="aadhar_card"
												onChange={handleChange}
											/>}
											label="Aadhar Card"
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{values.aadhar_card === true ?
											AadharCard() : null}
									</Grid>
									<Grid item xs={12} sm={2} md={2} >
										<FormControlLabel
											control={<GreenCheckbox
												checked={values.pen_card || false}
												style={{ marginLeft: '-6px' }}
												color="primary"
												name="pen_card"
												onChange={handleChange}
											/>}
											label="Pan Card"
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										{values.pen_card === true ?
											PenCard() : null}
									</Grid>
								</Grid>
								<CardFooter style={{ float: 'right' }}>
									<Button type="submit">Create</Button>
									<Button
										component={RouterLink}
										to="/doctor_list"
									>Cancel</Button>
								</CardFooter>
							</CardBody>
						</Card>
					</Grid>
					<Grid item xs={12} sm={3} md={3}>
					<Card style={{ marginTop: '45px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 8px, rgba(0, 0, 0, 0.22) 0px 10px 12px' }} className={classes.card}>
						<CardAvatar profile>
						<input
								type="file"
								accept="image/*"
								onChange={handleImageUpload}
								ref={imageUploader}
								style={{
									display: "none"
								}}
							/>
							<div
								style={{
									height: "123px",
									width: "147px",
								}}
								onClick={() => imageUploader.current.click()}
							>
								<img
									ref={uploadedImage}
									src={avatar}
									alt="Select"
									style={{
										width: "89%",
										height: "100%",
										position: "acsolute",
										cursor: 'pointer'
									}}
								/>
							</div>
						</CardAvatar>
						<CardBody>
							<div style={{ marginLeft:72 }}>
							<label>Upload Image</label>
							</div>
						</CardBody>
					</Card>
				</Grid>
				</Grid>
			</form>
		</div>
	);
}

export default CreateDoctor;